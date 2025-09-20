import Image from "next/image";
import { css } from "styled-system/css";

export function ProjectSelector() {
  return (
    <div
      className={css({
        width: "100%",
        px: "24px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "4px",
        })}
      >
        <Image src="/icons/edit-folder.svg" alt="folder icon" width={18} height={18} />
        <p
          className={css({
            color: "#000",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.28px",
          })}
        >
          프로젝트
        </p>
      </div>
      <div
        className={css({
          width: "210px",
          height: "42px",
          border: "1px solid #EFF2F5",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        Proejct Selector
      </div>
    </div>
  );
}
