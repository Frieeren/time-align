import { HomePage } from "@/views/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Align | 홈",
  description: "일정관리의 시작, Time Align",
};

export default function Page() {
  return <HomePage />;
}
