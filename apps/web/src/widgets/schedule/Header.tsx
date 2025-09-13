import Image from "next/image";
import { css } from "../../../styled-system/css";

export function ScheduleHeader() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        bg: "#3A8DFF",
        px: "20px",
        height: "44px",
      })}
    >
      <Image
        src="/icons/list.png"
        alt="list"
        width={24}
        height={24}
        className={css({
          cursor: "pointer",
        })}
      />
      <div
        className={css({
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          color: "white",
          textAlign: "center",
        })}
      >
        2025.07
      </div>
      <Image
        src="/icons/bell.png"
        alt="bell"
        width={24}
        height={24}
        className={css({
          cursor: "pointer",
        })}
      />
    </div>
  );
}
