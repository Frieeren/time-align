import { css } from "styled-system/css";

export function EditBottomSheetCta() {
  return (
    <div
      className={css({
        width: "100%",
        px: "20px",
      })}
    >
      <button
        type="button"
        className={css({
          width: "100%",
          height: "50px",
          borderRadius: "3px",
          bg: "#3A8DFF",
          color: "#FFF",
          fontSize: "18px",
          fontWeight: "600",
          letterSpacing: "-0.36px",
        })}
      >
        등록
      </button>
    </div>
  );
}
