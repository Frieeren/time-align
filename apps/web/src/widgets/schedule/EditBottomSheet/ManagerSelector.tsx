import Image from "next/image";
import { css } from "styled-system/css";

export function ManagerSelector() {
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
        <Image src="/icons/edit-manager.svg" alt="manager icon" width={18} height={18} />
        <p
          className={css({
            color: "#000",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.28px",
          })}
        >
          담당자
        </p>
      </div>
      <div
        className={css({
          width: "210px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
        })}
      >
        <ManagerSelectorItem name="담당자 전체" />
        <ManagerSelectorAddButton />
      </div>
    </div>
  );
}

function ManagerSelectorItem({ name }: { name: string }) {
  return (
    <div
      className={css({
        px: "8px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
        bg: "#EBF4FF",
        borderRadius: "16px",
      })}
    >
      <Image src="/icons/edit-check.svg" alt="check icon" width={18} height={18} />
      <p
        className={css({
          color: "#3A8DFF",
          fontSize: "10px",
          fontWeight: "600",
          letterSpacing: "-0.2px",
        })}
      >
        {name}
      </p>
    </div>
  );
}

function ManagerSelectorAddButton() {
  return (
    <div
      className={css({
        px: "8px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
        bg: "#EFF2F5",
        borderRadius: "16px",
      })}
    >
      <Image src="/icons/edit-add.svg" alt="add icon" width={18} height={18} />
      <p
        className={css({
          color: "#B7C2D0",
          fontSize: "10px",
          fontWeight: "600",
          letterSpacing: "-0.2px",
        })}
      >
        추가
      </p>
    </div>
  );
}
