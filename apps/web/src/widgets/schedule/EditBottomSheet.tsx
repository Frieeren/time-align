"use client";

import { BottomSheet } from "@team-frieeren/components";
import { useState } from "react";
import { css } from "styled-system/css";

export function EditBottomSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <BottomSheet open={open} onClose={onClose} radius="small" zIndex={100}>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          height: "600px",
        })}
      >
        <input
          className={css({
            width: "100%",
            height: "49px",
            px: "24px",
            py: "12px",
            borderBottom: "1px solid #F8F8F8",
            fontSize: "18px",
            fontWeight: "600",
            caretColor: "#3A8DFF",
            outline: "none",
            border: "none",
          })}
          placeholder="일정 제목"
        />
      </div>
    </BottomSheet>
  );
}
