import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: ["./apps/api/**/*"],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#0064FF" },
          secondary: { value: "#EE0F0F" },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
      },
      recipes: {
        projectChip: {
          className: "projectChip",
          base: {
            height: "26px",
            borderRadius: "9999px",
            py: "6px",
            px: "8px",
            fontSize: "10px",
            fontWeight: "600",
            lineHeight: "140%",
            letterSpacing: "-0.2px",
          },
          variants: {
            color: {
              orange: {
                color: "#FFA600",
                bg: "#FFEFD2",
              },
              purple: {
                color: "#9053F8",
                bg: "#F7E9FF",
              },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
