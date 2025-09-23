import * as TabsBase from "@radix-ui/react-tabs";
import { useRef } from "react";
import { css } from "../../../../styled-system/css";
import type { TabsProps } from "./Tabs.type";

export const Tabs = (props: TabsProps) => {
  const { width = "100%", tabItems, value, ...rest } = props;
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <TabsBase.Root
      className={css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
      })}
      value={value}
      {...rest}
      style={{ width }}
    >
      <TabsBase.List
        ref={listRef}
        data-orientation="horizontal"
        className={css({
          position: "relative",
          display: "flex",
          height: "35px",
          padding: "0 20px",
          backgroundColor: "#fff",
          boxSizing: "border-box",
        })}
      >
        {tabItems.map(item => (
          <TabsBase.Trigger
            key={`tabTrigger_${item.value}`}
            value={item.value}
            className={css({
              position: "relative",
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
              padding: "8px",
              boxSizing: "border-box",
              "& > div, &": {
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
                letterSpacing: "-0.28px",
              },
              '&[data-state="inactive"]': { color: "#B7C2D0" },
              '&[data-state="active"]': { color: "#3A8DFF" },
            })}
          >
            {item.label}
          </TabsBase.Trigger>
        ))}
      </TabsBase.List>
    </TabsBase.Root>
  );
};
