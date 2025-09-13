"use client";

import GoogleButton from "@/widgets/login/GoogleButton";
import { useSession } from "next-auth/react";

export function LoginPage() {
  const { data: session } = useSession();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <GoogleButton />
      <div style={{ width: 300, marginTop: 20 }}>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            maxWidth: "100%",
          }}
        >
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
