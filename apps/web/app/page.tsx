"use client";

import { useState } from "react";
import { httpClient } from "../shared/api/http";
import { BadRequestError, InternetServerError, NotFoundError } from "../shared/exception/APIError";

interface TestResponse {
  message: string;
  data: {
    id: number;
    name: string;
    timestamp: string;
  };
}

export default function Home() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleTest = async (type: string) => {
    setLoading(true);
    setError("");
    setResult("");

    try {
      switch (type) {
        case "get": {
          const response = await httpClient<TestResponse>({
            url: "/api/test",
            method: "GET",
            routes: true,
          });
          setResult(JSON.stringify(response, null, 2));
          break;
        }
        case "post": {
          const response = await httpClient<TestResponse>({
            url: "/api/test",
            method: "POST",
            data: { name: "New Test Item" },
            routes: true,
          });
          setResult(JSON.stringify(response, null, 2));
          break;
        }
        case "delete": {
          await httpClient({
            url: "/api/test",
            method: "DELETE",
            routes: true,
          });
          setResult("Successfully deleted (204 No Content)");
          break;
        }
        case "timeout": {
          const response = await httpClient<TestResponse>({
            url: "/api/test",
            method: "GET",
            params: { delay: "60000" }, // 5초 지연
            routes: true,
          });
          setResult(JSON.stringify(response, null, 2));
          break;
        }
        case "error400": {
          await httpClient({
            url: "/api/test/error",
            method: "GET",
            params: { status: "400" },
            routes: true,
          });
          break;
        }
        case "error404": {
          await httpClient({
            url: "/api/test/error",
            method: "GET",
            params: { status: "404" },
            routes: true,
          });
          break;
        }
        case "error500": {
          await httpClient({
            url: "/api/test/error",
            method: "GET",
            params: { status: "500" },
            routes: true,
          });
          break;
        }
      }
    } catch (err) {
      if (err instanceof BadRequestError) {
        setError(`Bad Request Error: ${err.message}`);
      } else if (err instanceof NotFoundError) {
        setError(`Not Found Error: ${err.message}`);
      } else if (err instanceof InternetServerError) {
        setError(`Server Error: ${err.message}`);
      } else if (err instanceof Error) {
        setError(`Error: ${err.message}`);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>

      <div className="space-x-2 mb-4">
        <button
          type="button"
          onClick={() => handleTest("get")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          GET Test
        </button>
        <button
          type="button"
          onClick={() => handleTest("post")}
          className="px-4 py-2 bg-green-500 text-white rounded"
          disabled={loading}
        >
          POST Test
        </button>
        <button
          type="button"
          onClick={() => handleTest("delete")}
          className="px-4 py-2 bg-red-500 text-white rounded"
          disabled={loading}
        >
          DELETE Test
        </button>
        <button
          type="button"
          onClick={() => handleTest("timeout")}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          disabled={loading}
        >
          Timeout Test
        </button>
      </div>

      <div className="space-x-2 mb-4">
        <button
          type="button"
          onClick={() => handleTest("error400")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
          disabled={loading}
        >
          400 Error
        </button>
        <button
          type="button"
          onClick={() => handleTest("error404")}
          className="px-4 py-2 bg-indigo-500 text-white rounded"
          disabled={loading}
        >
          404 Error
        </button>
        <button
          type="button"
          onClick={() => handleTest("error500")}
          className="px-4 py-2 bg-pink-500 text-white rounded"
          disabled={loading}
        >
          500 Error
        </button>
      </div>

      {loading && <div className="text-gray-500">Loading...</div>}

      {error && <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}

      {result && <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">{result}</pre>}
    </div>
  );
}
