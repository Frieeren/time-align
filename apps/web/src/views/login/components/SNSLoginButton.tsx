"use client";

import Image from "next/image";

export function SNSLoginButton({ provider }: { provider: "google" | "kakao" }) {
  const variants = {
    google: {
      label: "구글 로그인",
      bg: "#FFFFFF",
      color: "#000000",
      border: "1px solid #E3E8EF",
    },
    kakao: {
      label: "카카오 로그인",
      bg: "#FEE500",
      color: "#000000",
      border: "1px solid #FEE500",
    },
  };

  return (
    <button
      type="button"
      style={{
        background: variants[provider].bg,
        color: variants[provider].color,
        border: variants[provider].border,
        borderRadius: "5px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
        width: "100%",
      }}
    >
      <Image
        src={`/icons/${provider}.svg`}
        alt={variants[provider].label}
        width={26}
        height={26}
        style={{ position: "absolute", left: "25px" }}
      />
      <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.32px" }}>{variants[provider].label}</span>
    </button>
  );
}
