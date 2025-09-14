import type { DailySchedule } from "@/model/DailySchedule";
import { format } from "date-fns";
import Image from "next/image";
import { css } from "styled-system/css";
import { ProjectChip } from "./ProjectChip";

type DailyCardProps = DailySchedule;

export function DailyCard({ status, date, title, project, color, startTime, endTime, participants }: DailyCardProps) {
  return (
    <div
      className={css({
        position: "relative",
        width: "100%",
        p: "12px",
        bg: "white",
        height: "105px",
        borderRadius: "5px",
        display: "flex",
        gap: "8px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      })}
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
            width: "16px",
            height: "16px",
            position: "absolute",
            cursor: "pointer",
            top: "0",
            right: "0",
          })}
        >
          <button type="button">
            <Image src="/icons/more-menu.svg" alt="more-menu" width={16} height={16} />
          </button>
        </div>
        <div
          className={css({
            position: "absolute",
            bottom: "0",
            right: "0",
          })}
        >
          <ProjectChip color={color} project={project} />
        </div>
      </div>
    </div>
  );
}
