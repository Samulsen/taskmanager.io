//---------IMPORTS------------\

import { createContext, useState, ReactNode, useEffect } from "react";

//---------MAIN---------------\

type ContextValueType = {
  userUID: string;
  authState: boolean;
  setAuthState: React.Dispatch<React.SetStateAction<boolean>>;
  setUserUID: React.Dispatch<React.SetStateAction<string>>;
};
export const AuthContext = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthContextProvider: React.FC<{ children: ReactNode }> = function (pr) {
  const [authState, setAuthState] = useState(false);
  const [userUID, setUserUID] = useState("deffault");

  console.warn("Auth context ran!!!");
  console.log("current log state of app= " + authState);
  console.log("current user= " + userUID);

  const AuthContextValues: ContextValueType = {
    userUID,
    authState,
    setUserUID,
    setAuthState,
  };

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {pr.children}
    </AuthContext.Provider>
  );
};

//---------EXPORTS------------\

export default AuthContextProvider;
