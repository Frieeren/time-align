import { FAB } from "@/shared/components/FAB";
import { ScheduleCard } from "@/shared/components/ScheduleCard";
import { Calendar } from "@/widgets/home/Calendar";
import { Tabs } from "@/widgets/home/Tabs";
import { TopBanner } from "@/widgets/home/TopBanner";
import { css } from "styled-system/css";

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
