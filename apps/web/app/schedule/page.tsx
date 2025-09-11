import type { Metadata } from "next";
import Image from "next/image";
import { FAB } from "../../shared/components/FAB";
import { ScheduleCard } from "../../shared/components/ScheduleCard";
import { css } from "../../styled-system/css";
import { ScheduleHeader } from "./_components/Header";
import { ScheduleProgressDivider } from "./_components/ScheduleProgressDivider";
import { ScheduleProgressItem } from "./_components/ScheduleProgressItem";
import { Tabs } from "./_components/Tabs";

export const metadata: Metadata = {
  title: "Time Align | 일정",
  description: "일정관리의 시작, Time Align",
};

export default function Page() {
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
            pt: "8px",
            pb: "24px",
            px: "20px",
            gap: "12px",
            width: "100%",
          })}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={`schedule-card-${index.toString()}`}>
              <ScheduleCard />
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
            pt: "8px",
            pb: "24px",
            px: "20px",
            gap: "12px",
            width: "100%",
          })}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={`schedule-card-${index.toString()}`}>
              <ScheduleCard />
            </li>
          ))}
        </ul>
      </div>

      <FAB />
    </section>
  );
}
