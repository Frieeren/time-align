import { useState } from "react";
import { css, cx } from "../../../../styled-system/css";
import type { FloatingActionButtonProps } from "./FloatingActionButton.type";

export function FloatingActionButton({
  disabled = false,
  className,
  position = "fixed",
  top,
  left,
  bottom = 16,
  right = 16,
  actions = [],
  icon,
  openIcon,
  closeIcon,
  onClick,
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const style: React.CSSProperties = { position };
  if (top !== undefined) style.top = top;
  if (left !== undefined) style.left = left;
  if (bottom !== undefined) style.bottom = bottom;
  if (right !== undefined) style.right = right;

  return (
    <div
      className={cx(
        css({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }),
        className
      )}
      style={style}
    >
      <button
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          cursor: "pointer",
          border: "none",
          backgroundColor: "#3A8DFF",
        })}
        disabled={disabled}
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          onClick?.();
        }}
      >
        {isOpen ? (closeIcon ?? icon) : (openIcon ?? icon)}
      </button>
      <div
        className={css({
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          bottom: "76px",
          right: "0",
          transition: "all 0.3s ease-in-out",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        })}
      >
        {actions?.map((action, index) => (
          <div
            key={index.toString()}
            style={{
              transform: isOpen ? "translateY(0)" : `translateY(${40 - index * 20}px)`,
              transition: "transform 0.3s ease-in-out",
              transitionDelay: isOpen ? `${(index + 1) * 0.1}s` : "0s",
            }}
          >
            <button
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                cursor: "pointer",
                border: "none",
                backgroundColor: "#ffffff",
                boxShadow: "0 0 5.6px 0 rgba(0, 0, 0, 0.04)",
                _hover: {
                  backgroundColor: "#ebf4ff",
                  transition: "background-color 0.2s ease-in-out",
                },
              })}
              disabled={action.disabled}
              type="button"
              onClick={() => {
                action.onClick?.();
                setIsOpen(false);
              }}
            >
              {action.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
