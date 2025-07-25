"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { LogProvider } from "@team-frieeren/components";

export function AppLogProvider({ children }: { children: React.ReactNode }) {
  const logClient = {
    log: (
      event: string,
      data?: {
        logId: string;
        params?: Record<string, string>;
      }
    ) => {
      if (process.env.NODE_ENV === "development") {
        console.log(event, data);
        return;
      }

      switch (event) {
        case "screen": {
          sendGTMEvent({
            event: "pageview",
            value: {
              logId: data?.logId,
              params: data?.params,
            },
          });
          break;
        }
        case "event":
          sendGTMEvent({
            event,
            value: {
              logId: data?.logId,
              params: data?.params,
            },
          });
          break;
      }
    },
  };

  return <LogProvider logClient={logClient}>{children}</LogProvider>;
}
