import { LoginPage } from "@/views/login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Align | 로그인",
  description: "일정관리의 시작, Time Align",
};

export default function Page() {
  return <LoginPage />;
}
