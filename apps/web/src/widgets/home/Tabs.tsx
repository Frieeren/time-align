"use client";

import { TAB_ITEMS, type TabsState } from "@/views/home/types";
import Image from "next/image";
import { css } from "styled-system/css";

type TabsProps = {
  activeTab: TabsState;
  setActiveTab: (tab: TabsState) => void;
};

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
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
        onClick={() => setActiveTab(TAB_ITEMS.DAILY)}
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
          src={`/icons/check${activeTab === TAB_ITEMS.DAILY ? "-active" : ""}.png`}
          alt={TAB_ITEMS.DAILY}
          width={18}
          height={18}
        />
        <p
          className={css({
            fontSize: "14px",
            lineHeight: "1.4",
            letterSpacing: "-0.28px",
            fontWeight: "400",
            color: activeTab === TAB_ITEMS.DAILY ? "black" : "#B7C2D0",
          })}
        >
          Check List
        </p>
      </li>
      <li
        onClick={() => setActiveTab(TAB_ITEMS.MEETING)}
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
          src={`/icons/message${activeTab === TAB_ITEMS.MEETING ? "-active" : ""}.png`}
          alt={TAB_ITEMS.MEETING}
          width={20}
          height={20}
        />
        <p
          className={css({
            fontSize: "14px",
            lineHeight: "1.4",
            letterSpacing: "-0.28px",
            fontWeight: "400",
            color: activeTab === TAB_ITEMS.MEETING ? "black" : "#B7C2D0",
          })}
        >
          Meeting
        </p>
      </li>
    </ul>
  );
}
