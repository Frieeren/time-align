"use client";

import type { DailySchedule } from "@/model/DailySchedule";
import type { MeetingSchedule } from "@/model/MeetingSchedule";
import { FAB } from "@/shared/components/FAB";
import { Calendar } from "@/widgets/home/Calendar";
import { Tabs } from "@/widgets/home/Tabs";
import { TopBanner } from "@/widgets/home/TopBanner";
import { DailyCard } from "@/widgets/shared/DailyCard";
import { MeetingCard } from "@/widgets/shared/MeetingCard";
import { useState } from "react";
import { css } from "styled-system/css";
import { TAB_ITEMS, type TabsState } from "./types";

const DAILY_SCHEDULE_DATA: DailySchedule[] = [
  {
    status: "progress",
    date: new Date(),
    title: "MVP 설정 및 공유",
    project: "은행 신규 서비스",
    startTime: "09:30",
    endTime: "10:00",
    participants: ["프로젝트 전체 팀원"],
    color: "#FFA600",
  },
  {
    status: "completed",
    date: new Date(),
    title: "MVP 설정 및 공유",
    project: "은행 신규 서비스",
    startTime: "09:30",
    endTime: "10:00",
    participants: ["프로젝트 전체 팀원"],
    color: "#FFA600",
  },
];

const MEETING_SCHEDULE_DATA: MeetingSchedule[] = [
  {
    status: "progress",
    attendanceStatus: "tentative",
    date: new Date(),
    title: "어쩌고 회의",
    project: "은행 신규 서비스",
    startTime: "09:30",
    endTime: "10:00",
    participants: ["프로젝트 전체 팀원"],
  },
];

export function HomePage() {
  const [activeTab, setActiveTab] = useState<TabsState>(TAB_ITEMS.DAILY);

  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <TopBanner />
      <Calendar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
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
        {activeTab === TAB_ITEMS.DAILY
          ? DAILY_SCHEDULE_DATA.map((item, index) => (
              <li key={`schedule-card-${index.toString()}`}>
                <DailyCard {...item} />
              </li>
            ))
          : MEETING_SCHEDULE_DATA.map((item, index) => (
              <li key={`schedule-card-${index.toString()}`}>
                <MeetingCard {...item} />
              </li>
            ))}
      </ul>
      <FAB />
    </section>
  );
}
