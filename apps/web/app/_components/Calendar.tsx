import { css } from "../../styled-system/css";

export function Calendar() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        bg: "#3A8DFF",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "183px",
          pt: "23px",
          pb: "25px",
          bg: "white",
          borderRadius: "10px 10px 0 0",
        })}
      >
        Calendar Section
      </div>
    </div>
  );
}
