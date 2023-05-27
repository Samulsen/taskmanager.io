//---------IMPORTS------------\

import { createContext, useState, ReactNode } from "react";
import logCol from "../util/logColor";
import debugLoggerAuth from "../util/debugLoggerAuth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

//---------MAIN---------------\

type ContextValueType = {
  userUID: string;
  authState: boolean;
  setAuthState: React.Dispatch<React.SetStateAction<boolean>>;
  setUserUID: React.Dispatch<React.SetStateAction<string>>;
  authColdStart: () => Promise<boolean>;
};
export const AuthContext = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthContextProvider: React.FC<{ children: ReactNode }> = function (pr) {
  const [authState, setAuthState] = useState(false);
  const [userUID, setUserUID] = useState("anonymous");

  debugLoggerAuth(authState, userUID);

  const authColdStart = (): Promise<boolean> => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          logCol("User is logged in!", "green");
          resolve(true);
        } else {
          logCol("User is not logged in!", "red");
          resolve(false);
        }
      });
    });
  };

  const AuthContextValues: ContextValueType = {
    userUID,
    authState,
    setUserUID,
    setAuthState,
    authColdStart,
  };

  return (
    <AuthContext.Provider value={AuthContextValues}>
      {pr.children}
    </AuthContext.Provider>
  );
};

//---------EXPORTS------------\

export default AuthContextProvider;
