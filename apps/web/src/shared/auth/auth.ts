import NextAuth, { type NextAuthResult } from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { authControllerOauthLogin } from "../api/endpoints/auth/auth";
import type { OAuthLoginRequestDto } from "../api/model";
import { deleteCookie, setCookie } from "../utils/cookie";

const config: NextAuthConfig = {
  providers: [Google],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 14,
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      const payload: OAuthLoginRequestDto = {
        email: user.email || "",
        name: user.name || "",
        image: user.image || "",
        provider: account?.provider || "",
        providerId: account?.providerAccountId || "",
      };

      try {
        const response = await authControllerOauthLogin(payload);

        user.user = response.user;

        await setCookie("accessToken", response.accessToken);
        await setCookie("refreshToken", response.refreshToken);

        return true;
      } catch (error) {
        // to-do: 로그인 실패 처리
        console.error("백엔드 API 호출 실패:", error);
        return false;
      }
    },
    jwt: async ({ token }) => {
      return token;
    },
    session: async ({ session }) => {
      return session;
    },
  },
  events: {
    signOut: async message => {
      if ("token" in message) {
        await deleteCookie("accessToken");
        await deleteCookie("refreshToken");
      }
    },
  },
};

const result = NextAuth(config);

export const handlers: NextAuthResult["handlers"] = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;
export const update: NextAuthResult["unstable_update"] = result.unstable_update;
