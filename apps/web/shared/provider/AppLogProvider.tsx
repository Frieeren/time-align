"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { LogProvider } from "@team-frieeren/components";
import type { LogClient } from "@team-frieeren/components/log";

export function AppLogProvider({ children }: { children: React.ReactNode }) {
  const logClient: LogClient = {
    screen: ({ logId, params }) => {
      if (process.env.NODE_ENV === "development") {
        console.log(logId, params);
        return;
      }
      sendGTMEvent({
        event: "app_pageview",
        value: {
          logId,
          ...params,
        },
      });
    },
    click: ({ logId, params }) => {
      if (process.env.NODE_ENV === "development") {
        console.log(logId, params);
        return;
      }
      sendGTMEvent({
        event: "app_click",
        value: {
          logId,
          ...params,
        },
      });
    },
    popup: ({ logId, params }) => {
      if (process.env.NODE_ENV === "development") {
        console.log(logId, params);
        return;
      }
      sendGTMEvent({
        event: "app_popup",
        value: {
          logId,
          ...params,
        },
      });
    },
  };

  return <LogProvider logClient={logClient}>{children}</LogProvider>;
}
