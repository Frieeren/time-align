import type { DailySchedule } from "@/model/DailySchedule";
import { FAB } from "@/shared/components/FAB";
import { Calendar } from "@/widgets/home/Calendar";
import { Tabs } from "@/widgets/home/Tabs";
import { TopBanner } from "@/widgets/home/TopBanner";
import { DailyCard } from "@/widgets/shared/DailyCard";
import { css } from "styled-system/css";

const DAILY_CARD_DATA: DailySchedule[] = [
  {
    status: "progress",
    date: new Date(),
    title: "MVP 설정 및 공유 ",
    project: "은행 신규 서비스",
    startTime: "09:30",
    endTime: "10:00",
    participants: ["프로젝트 전체 팀원"],
    color: "#FFA600",
  },
  {
    status: "completed",
    date: new Date(),
    title: "MVP 설정 및 공유 ",
    project: "은행 신규 서비스",
    startTime: "09:30",
    endTime: "10:00",
    participants: ["프로젝트 전체 팀원"],
    color: "#FFA600",
  },
];

export function HomePage() {
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
        {DAILY_CARD_DATA.map((item, index) => (
          <li key={`schedule-card-${index.toString()}`}>
            <DailyCard {...item} />
          </li>
        ))}
      </ul>
      <FAB />
    </section>
  );
}
