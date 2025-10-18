import { Fragment } from "react";

interface TopBarProps {
  leftActions?: React.ReactNode[];
  title?: string;
  rightActions?: React.ReactNode[];
  style?: React.CSSProperties;
  className?: string;
}

export function TopBar({ leftActions, title, rightActions, style, className }: TopBarProps) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "44px",
        color: "#000",
        backgroundColor: "#fff",
        borderBottom: "1px solid #E3E8EF",
        position: "relative",
        ...style,
      }}
      className={className}
    >
      <div
        style={{
          position: "absolute",
          left: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
          gap: "7px",
        }}
      >
        {leftActions?.map((action, index) => (
          <Fragment key={`top-bar-left-action-${index.toString()}`}>{action}</Fragment>
        ))}
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.32px", textAlign: "center", width: "100%" }}>
        {title}
      </div>
      <div
        style={{
          position: "absolute",
          right: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
          gap: "7px",
        }}
      >
        {rightActions?.map((action, index) => (
          <Fragment key={`top-bar-right-action-${index.toString()}`}>{action}</Fragment>
        ))}
      </div>
    </header>
  );
}
