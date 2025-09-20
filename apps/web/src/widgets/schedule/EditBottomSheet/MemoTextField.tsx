import { css } from "styled-system/css";

export function MemoTextField() {
  return (
    <div
      className={css({
        margin: "0 24px",
        px: "18px",
        py: "14px",
        width: "calc(100% - 48px)",
        height: "185px",
        borderRadius: "6px",
        bg: "#EFF2F5",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      })}
    >
      <p
        className={css({
          color: "#000",
          fontSize: "14px",
          fontWeight: "500",
          letterSpacing: "-0.28px",
        })}
      >
        메모
      </p>
      <textarea
        placeholder="중요한 메모를 잊지 않고 작성해보세요"
        className={css({
          width: "100%",
          height: "100%",
          borderRadius: "4px",
          outline: "none",
          border: "none",
          resize: "none",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "140%",
          letterSpacing: "-0.24px",
        })}
      />
    </div>
  );
}
