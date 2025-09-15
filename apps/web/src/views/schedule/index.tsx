"use client";

import type { DailySchedule } from "@/model/DailySchedule";
import type { MeetingSchedule } from "@/model/MeetingSchedule";
import { FAB } from "@/shared/components/FAB";
import { EditBottomSheet } from "@/widgets/schedule/EditBottomSheet";
import { ScheduleHeader } from "@/widgets/schedule/Header";
import { ScheduleProgressDivider } from "@/widgets/schedule/ScheduleProgressDivider";
import { ScheduleProgressItem } from "@/widgets/schedule/ScheduleProgressItem";
import { Tabs } from "@/widgets/schedule/Tabs";
import { DailyCard } from "@/widgets/shared/DailyCard";
import { MeetingCard } from "@/widgets/shared/MeetingCard";
import Image from "next/image";
import { useState } from "react";
import { css } from "styled-system/css";

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

export function SchedulePage() {
  const [isOpenEditBottomSheet, setIsOpenEditBottomSheet] = useState(false);

  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      <ScheduleHeader />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "302px",
          borderRadius: "0 0 10px 10px",
          bg: "#FFF",
          boxShadow: "0 4px 2.8px -1px rgba(0, 0, 0, 0.04)",
          zIndex: 1,
        })}
      >
        Calendar
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          bg: "#F8F8F8",
          pt: "78px",
          pb: "24px",
          mt: "-54px",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            px: "20px",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              borderRadius: "6px",
              bg: "#637A99",
            })}
          >
            <ScheduleProgressItem label="모든 일정" total={12} percentage={100} />
            <ScheduleProgressDivider />
            <ScheduleProgressItem label="완료" total={12} percentage={100} />
            <ScheduleProgressDivider />
            <ScheduleProgressItem label="진행 중" total={12} percentage={100} />
          </div>
        </div>
        <Tabs />
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
            pl: "20px",
          })}
        >
          <Image src="/icons/check-rounded.png" alt="check-rounded" width={24} height={24} />
          <div
            className={css({
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "140%",
              color: "#000",
            })}
          >
            일일 업무
          </div>
        </div>
        <ul
          className={css({
            display: "flex",
            flexDirection: "column",
            pt: "12px",
            pb: "24px",
            px: "20px",
            gap: "12px",
            width: "100%",
          })}
        >
          {DAILY_SCHEDULE_DATA.map((item, index) => (
            <li key={`schedule-card-${index.toString()}`}>
              <DailyCard {...item} />
            </li>
          ))}
        </ul>
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
            pl: "20px",
          })}
        >
          <Image src="/icons/message-rounded.png" alt="message-rounded" width={24} height={24} />
          <div
            className={css({
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "140%",
              color: "#000",
            })}
          >
            회의 일정
          </div>
        </div>
        <ul
          className={css({
            display: "flex",
            flexDirection: "column",
            pt: "12px",
            pb: "24px",
            px: "20px",
            gap: "12px",
            width: "100%",
          })}
        >
          {MEETING_SCHEDULE_DATA.map((item, index) => (
            <li key={`schedule-card-${index.toString()}`}>
              <MeetingCard {...item} />
            </li>
          ))}
        </ul>
      </div>

      <FAB onEditClick={() => setIsOpenEditBottomSheet(true)} />
      <EditBottomSheet open={isOpenEditBottomSheet} onClose={() => setIsOpenEditBottomSheet(false)} />
    </section>
  );
}
