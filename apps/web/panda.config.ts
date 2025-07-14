import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

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
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
