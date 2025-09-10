import type { Metadata } from "next";
import BottomNavigation from "../shared/components/BottomNavigation";
import RQProvider from "../shared/provider/RQProvider";
import SessionProvider from "../shared/provider/SessionProvider";
import "../shared/style/index.css";
import "@team-frieeren/components/styles.css";
import { css } from "../styled-system/css";

export const metadata: Metadata = {
  title: "Time Align",
  description: "일정관리의 시작, Time Align",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={css({ bg: "gray.50", fontFamily: "Pretendard" })}>
        <SessionProvider>
          <RQProvider>
            <main
              className={css({
                maxWidth: "768px",
                mx: "auto",
                pb: "56px",
                minHeight: "100vh",
                bg: "white",
              })}
            >
              {children}
            </main>
            <BottomNavigation />
          </RQProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
