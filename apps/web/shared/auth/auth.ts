import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

const config: NextAuthConfig = {
  providers: [Google],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
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
        const response = await fetch("http://localhost:3001/auth/oauth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        user.user = data.user;
        user.accessToken = data.accessToken;
        user.refreshToken = data.refreshToken;

        return true;
      } catch (error) {
        // to-do: 로그인 실패 처리
        console.error("백엔드 API 호출 실패:", error);
        return false;
      }
    },
    jwt: async ({ token, user }) => {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string;
        session.refreshToken = token.refreshToken as string;
      }

      return session;
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
