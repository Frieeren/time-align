import { css, cva } from "../../../../styled-system/css";

// Toast Content 스타일 (position과 visible variants 포함)
export const toastContent = cva({
  base: {
    opacity: 0,
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    borderRadius: "4px",
    minHeight: "48px",
    padding: "0 14px",
    background: "#3D3D3D",
    color: "#FFFFFF",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)",
    pointerEvents: "auto",
    willChange: "transform",
    transition: "transform 0.23s cubic-bezier(0.21, 1.02, 0.73, 1)",
  },
  compoundVariants: [
    {
      position: "top",
      visible: true,
      css: {
        animation: "toast-enter-top 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards",
        "@media (prefers-reduced-motion: reduce)": {
          animation: "toast-fade-in 0.35s ease-in forwards",
        },
      },
    },
    {
      position: "top",
      visible: false,
      css: {
        animation: "toast-exit-top 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards",
        "@media (prefers-reduced-motion: reduce)": {
          animation: "toast-fade-out 0.4s ease-out forwards",
        },
      },
    },
    {
      position: "bottom",
      visible: true,
      css: {
        animation: "toast-enter-bottom 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards",
        "@media (prefers-reduced-motion: reduce)": {
          animation: "toast-fade-in 0.35s ease-in forwards",
        },
      },
    },
    {
      position: "bottom",
      visible: false,
      css: {
        animation: "toast-exit-bottom 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards",
        "@media (prefers-reduced-motion: reduce)": {
          animation: "toast-fade-out 0.4s ease-out forwards",
        },
      },
    },
  ],
});

export const toastTypeMessage = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const toastTypeIcon = css({
  display: "flex",
  alignItems: "center",
  '&[data-toast-type="default"]': {
    display: "none",
  },
});

export const toastMessage = css({
  fontSize: "14px",
  fontWeight: "400",
  color: "#FFFFFF",
  lineHeight: "20px",
});

export const toastActionLink = css({
  flexShrink: 0,
  fontSize: "12px",
  fontWeight: "400",
  color: "#FFFFFF",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
  cursor: "pointer",
});

export const toastActionButton = css({
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 6px",
  backgroundColor: "#FF8A00",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "400",
  color: "#FFFFFF",
  cursor: "pointer",
});

export const toasterContent = css({
  position: "fixed",
  zIndex: 9999,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none",
});

export const toastWrapper = cva({
  base: {
    position: "absolute",
    "& > *": {
      transition: "all 0.23s cubic-bezier(0.21, 1.02, 0.73, 1)",
    },
  },
  variants: {
    position: {
      "top-right": {
        right: 0,
      },
      "top-left": {
        left: 0,
      },
      "top-center": {
        left: "50%",
      },
      "bottom-right": {
        bottom: 0,
        right: 0,
      },
      "bottom-left": {
        bottom: 0,
        left: 0,
      },
      "bottom-center": {
        bottom: 0,
        left: "50%",
      },
    },
  },
});
