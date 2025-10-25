"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
        backgroundColor: "white",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "4px 0",
          maxWidth: "100%",
          justifyContent: "space-between",
          boxShadow: "0 -4px 9.2px -1px rgba(0, 0, 0, 0.03)",
        }}
      >
        {NAV_ITEMS.map(item => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
              }}
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
