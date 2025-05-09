import React, { createContext, ReactNode, useContext, useState } from "react";

interface FormData {
  LogInSessionHolder: boolean;
  setLogInSession: React.Dispatch<React.SetStateAction<any>>;
}

interface Props {
  children: ReactNode;
}

const LogInSession = createContext({} as FormData);

const InstitutionsetLogInSession = ({ children }: Props) => {
  const [LogInSessionHolder, setLogInSession] = useState(false);

  return (
    <LogInSession.Provider value={{ LogInSessionHolder, setLogInSession }}>
      {children}
    </LogInSession.Provider>
  );
};

export default InstitutionsetLogInSession;
export const usesetLogInSessionContext = () => {
  return useContext(LogInSession);
};
