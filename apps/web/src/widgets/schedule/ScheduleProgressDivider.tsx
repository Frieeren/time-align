import { css } from "../../../styled-system/css";

export function ScheduleProgressDivider() {
  return (
    <div
      className={css({
        width: "1px",
        height: "20px",
        borderRadius: "50px",
        bg: "#D9D9D9",
      })}
    />
  );
}
