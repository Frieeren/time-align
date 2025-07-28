"use client";

import { Button, LogScreen, Popup } from "@team-frieeren/components";
import { useState } from "react";
import { css } from "../styled-system/css";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <LogScreen logParams={{ title: "Home" }}>
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
        <Button>Click Button</Button>
        <Button onClick={() => setOpen(true)}>Click Popup</Button>
        <Popup
          open={open}
          buttonLayoutType="typeA"
          title="Popup Title"
          button={<Button onClick={() => setOpen(false)}>Close Popup</Button>}
        />
      </div>
    </LogScreen>
  );
}
