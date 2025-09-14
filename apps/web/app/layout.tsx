import BottomNavigation from "@/shared/components/BottomNavigation";
import RQProvider from "@/shared/provider/RQProvider";
import SessionProvider from "@/shared/provider/SessionProvider";
import type { Metadata } from "next";
import { css } from "styled-system/css";
import "@/shared/style/index.css";

export const metadata: Metadata = {
  title: "Time Align",
  description: "일정관리의 시작, Time Align",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={css({ bg: "gray.50", fontFamily: "Pretendard", overflowX: "hidden" })}>
        <SessionProvider>
          <RQProvider>
            <main
              className={css({
                overflowX: "hidden",
                maxWidth: "768px",
                mx: "auto",
                pb: "56px",
                minHeight: "100vh",
                bg: "white",
                touchAction: "pan-x pan-y",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
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
