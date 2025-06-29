"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Session = {
  token: string | null;
  loading: boolean;
};

const SessionContext = createContext<Session>({ token: null, loading: true });

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        setLoading(false);
      });
  }, []);

  return (
    <SessionContext.Provider value={{ token, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
