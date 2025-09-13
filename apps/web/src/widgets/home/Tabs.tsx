"use client";

import Image from "next/image";
import { useState } from "react";
import { css } from "styled-system/css";

const TAB_ITEMS = ["check", "message"];

export function Tabs() {
  const [activeTab, setActiveTab] = useState(TAB_ITEMS[0]);

  return (
    <ul
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        px: "20px",
        bg: "white",
      })}
    >
      <li
        onClick={() => setActiveTab(TAB_ITEMS[0])}
        className={css({
          cursor: "pointer",
          flex: 1,
          height: "35px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        })}
      >
        <Image
          src={`/icons/check${activeTab === TAB_ITEMS[0] ? "-active" : ""}.png`}
          alt={TAB_ITEMS[0] as string}
          width={18}
          height={18}
        />
        <p
          className={css({
            fontSize: "14px",
            lineHeight: "1.4",
            letterSpacing: "-0.28px",
            fontWeight: "400",
            color: activeTab === TAB_ITEMS[0] ? "black" : "#B7C2D0",
          })}
        >
          Check List
        </p>
      </li>
      <li
        onClick={() => setActiveTab(TAB_ITEMS[1])}
        className={css({
          cursor: "pointer",
          flex: 1,
          height: "35px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        })}
      >
        <Image
          src={`/icons/message${activeTab === TAB_ITEMS[1] ? "-active" : ""}.png`}
          alt={TAB_ITEMS[1] as string}
          width={20}
          height={20}
        />
        <p
          className={css({
            fontSize: "14px",
            lineHeight: "1.4",
            letterSpacing: "-0.28px",
            fontWeight: "400",
            color: activeTab === TAB_ITEMS[1] ? "black" : "#B7C2D0",
          })}
        >
          Meeting
        </p>
      </li>
    </ul>
  );
}
