import { css } from "../../../styled-system/css";

export function ScheduleProgressItem({
  label,
  total,
  percentage,
}: {
  label: string;
  total: number;
  percentage: number;
}) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        py: "7px",
        px: "14px",
      })}
    >
      <div
        className={css({
          color: "#FFF",
          fontSize: "10px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          letterSpacing: "-0.2px",
        })}
      >
        {label}
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
        })}
      >
        <div
          className={css({
            color: "#FFF",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "140%",
            letterSpacing: "-0.48px",
          })}
        >
          {total}
        </div>
        <div
          className={css({
            width: "1px",
            height: "20px",
            transform: "rotate(10deg)",
            bg: "#D9D9D9",
          })}
        />
        <div
          className={css({
            color: "#D9D9D9",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "140%",
            letterSpacing: "-0.28px",
          })}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}
