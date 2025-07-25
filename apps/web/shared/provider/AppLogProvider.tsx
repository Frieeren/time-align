"use client";

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

      // switch (event) {
      //   case "screen": {
      //     ga.send("pageview", {
      //       logId: data?.logId,
      //       params: data?.params,
      //     });
      //     break;
      //   }
      //   case "event": {
      //     ga.send("event", {
      //       logId: data?.logId,
      //       params: data?.params,
      //     });
      //   }
      // }
    },
  };

  return <LogProvider logClient={logClient}>{children}</LogProvider>;
}
