import { css } from "styled-system/css";

export function Tabs() {
  return (
    <div
      className={css({
        margin: "0 auto",
        width: "200px",
        height: "27px",
        borderRadius: "4px",
        bg: "#EFF2F5",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div>Tabs</div>
    </div>
  );
}
