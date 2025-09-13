import { SchedulePage } from "@/views/schedule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Align | 일정",
  description: "일정관리의 시작, Time Align",
};

export default function Page() {
  return <SchedulePage />;
}
