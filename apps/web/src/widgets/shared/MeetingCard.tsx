"use client";

import type { AttendanceStatus, MeetingSchedule } from "@/model/MeetingSchedule";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { css, cva } from "styled-system/css";

const ATTENDANCE_STATUS_LABELS: Record<AttendanceStatus, string> = {
  tentative: "미응답",
  accepted: "답변완료",
  declined: "거절",
} as const;

const ATTENDANCE_STATUS_COLORS: Record<AttendanceStatus, string> = {
  tentative: "#FF6B6B",
  accepted: "#00C896",
  declined: "#637A99",
} as const;

const AttendanceButton = cva({
  base: {
    py: "6px",
    px: "9px",
    borderRadius: "5px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "-0.24px",
    cursor: "pointer",
  },
  variants: {
    visual: {
      declined: {
        bg: "transparent",
        color: "#637A99",
      },
      accepted: {
        bg: "#3A8DFF",
        color: "#EBF4FF",
      },
    },
  },
});

type MeetingCardProps = MeetingSchedule;

export function MeetingCard({
  status,
  date,
  title,
  project,
  startTime,
  endTime,
  participants,
  attendanceStatus,
}: MeetingCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleMoreMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("more menu clicked");
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <div
      className={css({
        position: "relative",
        width: "100%",
        bg: "white",
        borderRadius: "5px",
        overflow: "hidden",
      })}
    >
      <div
        className={css({
          position: "relative",
          width: "100%",
          height: "105px",
          p: "12px",
          borderRadius: "5px",
          display: "flex",
          gap: "8px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        })}
        onClick={handleCardClick}
      >
        <div
          className={css({
            height: "100%",
            pt: "20px",
          })}
        >
          <button
            type="button"
            className={css({
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Image src={`/icons/check-${status}.svg`} alt={status} width={24} height={24} />
          </button>
        </div>
        <div
          className={css({
            position: "relative",
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          })}
        >
          <p
            className={css({
              color: "#3A8DFF",
              fontSize: "10px",
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.2px",
            })}
          >
            {format(date, "MM.dd")}
          </p>
          <p
            className={css({
              mt: "4px",
              color: "#000",
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "140%",
              letterSpacing: "-0.24px",
            })}
          >
            {title}
          </p>
          <p
            className={css({
              color: "#46576D",
              fontSize: "10px",
              fontWeight: "400",
              lineHeight: "140%",
              letterSpacing: "-0.2px",
            })}
          >
            {startTime} ~ {endTime}
          </p>
          <p
            className={css({
              mt: "10px",
              color: "#637A99",
              fontSize: "10px",
              fontWeight: "500",
              lineHeight: "140%",
              letterSpacing: "-0.2px",
            })}
          >
            {participants.join(", ")}
          </p>
          <div
            className={css({
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
              top: "0",
              right: "0",
            })}
          >
            <p
              className={css({
                fontSize: "10px",
                fontWeight: "500",
                lineHeight: "140%",
                letterSpacing: "-0.2px",
              })}
              style={{
                color: ATTENDANCE_STATUS_COLORS[attendanceStatus],
              }}
            >
              {ATTENDANCE_STATUS_LABELS[attendanceStatus]}
            </p>
            <button type="button" onClick={handleMoreMenuClick}>
              <Image src="/icons/more-menu.svg" alt="more-menu" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={css({
            p: "10px",
            borderTop: "1px solid #D9D9D9",
            display: "flex",
            gap: "8px",
            alignContent: "center",
            justifyContent: "flex-end",
          })}
        >
          <button type="button" className={AttendanceButton({ visual: "declined" })}>
            참석 못해요
          </button>
          <button type="button" className={AttendanceButton({ visual: "accepted" })}>
            회의에 참석할께요
          </button>
        </div>
      )}
    </div>
  );
}
