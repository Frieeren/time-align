import type { Metadata } from "next";
import { css } from "../styled-system/css";
import { Calendar } from "./_components/Calendar";
import { FAB } from "./_components/FAB";
import { ScheduleCard } from "./_components/ScheduleCard";
import { Tabs } from "./_components/Tabs";
import { TopBanner } from "./_components/TopBanner";

export const metadata: Metadata = {
  title: "Time Align | 홈",
  description: "일정관리의 시작, Time Align",
};

export default function Page() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <TopBanner />
      <Calendar />
      <Tabs />
      <ul
        className={css({
          display: "flex",
          flexDirection: "column",
          py: "18px",
          px: "22px",
          gap: "12px",
          bg: "#EFF2F5",
        })}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={`schedule-card-${index.toString()}`}>
            <ScheduleCard />
          </li>
        ))}
      </ul>
      <FAB />
    </section>
  );
}
