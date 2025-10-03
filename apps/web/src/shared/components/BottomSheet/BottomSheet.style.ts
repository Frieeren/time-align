import { css, cva } from "../../../../styled-system/css";

/* Color tokens */
const SEED_PALETTE_COLOR_BASE_100 = "#ffffff";
const SEED_PALETTE_COLOR_BASE_800 = "#494f54";

/* Radius tokens */
const SEED_SPACING_100 = "0px";
const SEED_SPACING_300 = "8px";
const SEED_SPACING_600 = "20px";
const SEED_SPACING_900 = "32px";

export const overlay = css({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

export const drawerContent = cva({
  base: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "fit-content",
    backgroundColor: "#fff",
    outline: "none",
    maxHeight: "calc(100dvh - 32px)",
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    overflowY: "hidden",
  },
  variants: {
    radius: {
      none: {
        borderTop: SEED_SPACING_100,
      },
      small: {
        borderRadius: SEED_SPACING_300,
      },
      medium: {
        borderRadius: SEED_SPACING_600,
      },
      large: {
        borderRadius: SEED_SPACING_900,
      },
    },
    theme: {
      light: {
        backgroundColor: SEED_PALETTE_COLOR_BASE_100,
      },
      dark: {
        backgroundColor: SEED_PALETTE_COLOR_BASE_800,
      },
    },
  },
});

export const drawerContentInner = css({
  maxHeight: "calc(100dvh - 68px)",
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
});

export const drawerHandle = css({
  height: "36px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
