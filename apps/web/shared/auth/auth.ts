import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { deleteCookie, setCookie } from "../utils/cookie";
import { httpClient } from "../api/http";

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
      const payload = {
        email: user.email,
        name: user.name,
        image: user.image,
        provider: account?.provider,
        providerId: account?.providerAccountId,
      };

      try {
        const response = await httpClient<{
          accessToken: string;
          refreshToken: string;
          user: {
            id: number;
            email: string;
            name: string;
            image: string;
          };
        }>({
          url: "/auth/oauth",
          method: "POST",
          body: JSON.stringify(payload)
        });

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
    signOut: async (message) => {
      if ("token" in message) {
        await deleteCookie("accessToken");
        await deleteCookie("refreshToken");
      }
    },
  },
};

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth(config);
