import { css } from "../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        bg: "blue.100",
        minH: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <h1 className={css({ fontSize: "3xl", fontWeight: "body", color: "primary" })}>Hello, Panda CSS!</h1>
    </div>
  );
}
