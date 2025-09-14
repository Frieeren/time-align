"use client";

import Image from "next/image";
import { useState } from "react";
import { css } from "../../../styled-system/css";

export function FAB() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={css({
        position: "fixed",
        bottom: "74px",
        right: "18px",
        zIndex: 60,
        mx: "auto",
      })}
    >
      <div
        className={css({
          width: "56px",
          height: "56px",
          bg: "#3A8DFF",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
        })}
        onClick={handleToggle}
      >
        <Image
          src="/icons/plus.png"
          alt="plus"
          width={20}
          height={20}
          style={{
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </div>
      <div
        className={css({
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          bottom: "76px",
          right: "0",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "all 0.3s ease-in-out",
        })}
      >
        <div
          className={css({
            width: "56px",
            height: "56px",
            bg: "#FFF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 5.6px 0 rgba(0, 0, 0, 0.04);",
            transform: isOpen ? "translateY(0)" : "translateY(40px)",
            transition: "transform 0.3s ease-in-out",
            transitionDelay: isOpen ? "0.1s" : "0s",
          })}
        >
          <Image src="/icons/fab-edit.svg" alt="edit" width={20} height={20} />
        </div>
        <div
          className={css({
            width: "56px",
            height: "56px",
            bg: "#FFF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 5.6px 0 rgba(0, 0, 0, 0.04);",
            transform: isOpen ? "translateY(0)" : "translateY(20px)",
            transition: "transform 0.3s ease-in-out",
            transitionDelay: isOpen ? "0.1s" : "0s",
          })}
        >
          <Image src="/icons/fab-folder.svg" alt="foloder" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
