"use client";

import { useState } from "react";
import { css } from "../../../styled-system/css";

export function Tabs() {
  const [activeTab, setActiveTab] = useState("전체");

  return (
    <ul
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        mt: "16px",
        mb: "18px",
        ml: "20px",
        gap: "8px",
      })}
    >
      {["전체", "은행 신규 서비스", "어쩌고 서비스"].map(tab => (
        <li
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={css({
            display: "flex",
            py: "6px",
            px: "8px",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "16px",
            bg: activeTab === tab ? "#EBF4FF" : "#FFF",
            color: activeTab === tab ? "#3A8DFF" : "#B7C2D0",
            border: `1px solid ${activeTab === tab ? "#E7EBEF" : "transparent"}`,
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "1.4",
            transition: "color 0.3s ease, background-color 0.3s ease",
            cursor: "pointer",
          })}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
}
