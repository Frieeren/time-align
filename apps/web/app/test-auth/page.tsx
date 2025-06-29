"use client";

import { useEffect, useState } from "react";
import GoogleButton from "./_components/GoogleButton";
import { useSession } from "next-auth/react";
import { httpClient } from "../../shared/api/http";

export default function TestAuthPage() {
  const { data: session } = useSession();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const response = await httpClient({
        url: "/auth/profile",
      });

      console.log(response);
    };

    getProfile();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <GoogleButton />
      <div style={{ width: 300, marginTop: 20 }}>
        <pre style={{ 
          whiteSpace: 'pre-wrap', 
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          maxWidth: '100%'
        }}>
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}