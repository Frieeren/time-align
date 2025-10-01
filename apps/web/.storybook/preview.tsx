import "@/shared/style/index.css";
import type { Preview } from "@storybook/nextjs-vite";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    Story => {
      if (!document.getElementById("toast-portal")) {
        const portalDiv = document.createElement("div");
        portalDiv.id = "toast-portal";
        document.body.appendChild(portalDiv);
      }

      return <Story />;
    },
  ],
};

export default preview;
