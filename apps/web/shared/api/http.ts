import { signOut } from "next-auth/react";
import { BadRequestError, InternetServerError, NotFoundError, UnauthorizedError } from "../exception/APIError";
import { BaseError } from "../exception/BaseError";
import { getCookie, setCookie } from "../utils/cookie";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TIMEOUT = 60000;

interface FetchOptions extends RequestInit {
  url: string;
  params?: Record<string, string | number | string[] | undefined>;
  data?: unknown;
  routes?: boolean; // next api route endpoint
}

const parseResponse = async <T>(response: Response): Promise<T> => {
  const contentType = response.headers.get("content-type");
  const isJson = contentType && /json/.test(contentType);

  if (!response.ok) {
    let data: unknown;
    try {
      data = isJson ? await response.json() : undefined;
    } catch (e) {
      throw new BaseError(response.status, "Failed to parse error response");
    }

    const message = typeof data === "object" && data !== null && "message" in data ? String(data.message) : null;

    switch (response.status) {
      case 400:
        throw new BadRequestError(message || "Bad Request");
      case 404:
        throw new NotFoundError(message || "Not Found");
      case 500:
        throw new InternetServerError(message || "Internal Server Error");
      default:
        throw new BaseError(response.status, message || "An error occurred");
    }
  }

  if (response.status === 204) {
    return {} as T;
  }

  return isJson ? response.json() : (response.text() as Promise<T>);
};

export const httpClient = async <T>(config: FetchOptions): Promise<T> => {
  const { url, params, data, headers = {}, routes = false, ...init } = config;

  // handle URL Parameter
  const searchParams = new URLSearchParams();
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          searchParams.append(key, value.join(","));
        } else {
          searchParams.append(key, String(value));
        }
      }
    }
  }

  const queryString = searchParams.toString();
  const fullUrl = `${routes ? "" : baseURL}${url}${queryString ? `?${queryString}` : ""}`;

  // handle AbortController for fetching timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  try {
    const response = await fetch(fullUrl, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      signal: controller.signal,
    });

    // re-verify access token
    if (response.status === 401) {
      const refreshResponse = await fetch(`${baseURL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken,
        }),
        signal: controller.signal,
      });

      if (refreshResponse.ok) {
        const refreshData = await refreshResponse.json();
        const newAccessToken = refreshData.accessToken;

        await setCookie("accessToken", newAccessToken);
      } else {
        throw new UnauthorizedError("Expired authorization token");
      }
    }

    return parseResponse<T>(response);
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      await signOut({ redirectTo: "/login" });
    }

    if (error instanceof BaseError) {
      throw error;
    }

    if (error instanceof Error && error.name === "AbortError") {
      throw new BaseError(408, "Request timeout");
    }

    throw new BaseError(0, `Network Error: ${(error as Error).message}`);
  } finally {
    clearTimeout(timeoutId);
  }
};
