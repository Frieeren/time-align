"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import type { DropdownProps } from "./Dropdown.type";

export const Dropdown = ({ label, items, onOpenChange, onClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ label: string; value: string } | null>(null);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  const handleClick = (value: { label: string; value: string }) => {
    setSelectedItem(value);
    onClick?.(value);
  };

  const displayLabel = selectedItem?.label || label;

  return (
    <DropdownMenu.Root onOpenChange={handleOpenChange}>
      <DropdownMenu.Trigger asChild className={css({})}>
        <div
          className={css({
            border: "1px solid rgba(0, 0, 0, 0.2)",
            padding: "11px 20px",
            minWidth: "170px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          })}
          style={{ borderRadius: isOpen ? "4px 4px 0 0" : "4px" }}
        >
          <div
            className={css({
              width: "calc(100% - 40px)",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "1.4",
              letterSpacing: "-0.28px",
            })}
          >
            {displayLabel}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
            style={{
              transform: isOpen ? "rotate(270deg)" : "rotate(90deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <path
              d="M8 5l8 7-8 7"
              stroke="#1f2937"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={css({
            borderTop: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            backgroundColor: "white",
            borderRadius: "0 0 4px 4px",
          })}
          sideOffset={-1}
        >
          {items.map(item => {
            const isSelected = selectedItem?.value === item.value;
            const itemBaseClass = css({
              minWidth: "170px",
              display: "flex",
              alignItems: "center",
              padding: "11px 20px",
              userSelect: "none",
              outline: "none",
              cursor: "pointer",
              borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
              borderRight: "1px solid rgba(0, 0, 0, 0.2)",
              transition: "color 0.2s ease-in-out",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "1.4",
              letterSpacing: "-0.28px",
              _hover: {
                paddingLeft: "17px",
                borderLeft: "4px solid #3A8DFF",
                color: "#3A8DFF",
              },
              "&[data-highlighted]": {
                paddingLeft: "17px",
                borderLeft: "4px solid #3A8DFF",
                color: "#3A8DFF",
              },
              "&[data-disabled]": {
                pointerEvents: "none",
              },
            });
            const itemSelectedClass = css({
              paddingLeft: "17px",
              borderLeft: "4px solid #3A8DFF",
              color: "#3A8DFF",
            });

            return (
              <DropdownMenu.Item
                className={`${itemBaseClass}${isSelected ? ` ${itemSelectedClass}` : ""}`}
                key={item.value}
                onClick={() => handleClick(item)}
              >
                {item.label}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
