import Image from "next/image";
import { css } from "../../styled-system/css";

export function FAB() {
  return (
    <div
      className={css({
        position: "fixed",
        bottom: "74px",
        right: "54px",
        zIndex: 60,
        maxWidth: "768px",
        mx: "auto",
        left: "18px",
        display: "flex",
        justifyContent: "flex-end",
      })}
    >
      <div
        className={css({
          width: "56px",
          height: "56px",
          bg: "#3A8DFF",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        })}
      >
        <Image src="/icons/plus.png" alt="plus" width={20} height={20} />
      </div>
    </div>
  );
}
