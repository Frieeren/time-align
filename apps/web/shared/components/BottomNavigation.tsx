"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "../../styled-system/css";

const NAV_ITEMS = [
  {
    href: "/",
    label: "홈",
    icon: "home",
  },
  {
    href: "/schedule",
    label: "일정",
    icon: "schedule",
  },
  {
    href: "/documents",
    label: "문서",
    icon: "documents",
  },
  {
    href: "/profile",
    label: "프로필",
    icon: "profile",
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className={css({
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        px: "4",
        bg: "white",
        paddingBottom: "env(safe-area-inset-bottom)",
      })}
    >
      <div
        className={css({
          display: "flex",
          width: "100%",
          py: "4px",
          maxWidth: {
            base: "none", // 모바일
            md: "768px", // 태블릿
          },
          justifyContent: {
            base: "space-between", // 모바일
            md: "space-around", // 태블릿
          },
          boxShadow: "0 -4px 9.2px -1px rgba(0, 0, 0, 0.03)",
        })}
      >
        {NAV_ITEMS.map(item => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
              })}
            >
              <Image
                src={`/icons/${item.icon}${isActive ? "-active" : ""}.png`}
                alt={item.label}
                width={48}
                height={48}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
