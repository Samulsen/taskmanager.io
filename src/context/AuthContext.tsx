//---------IMPORTS------------\

//__i-libraries______

import { createContext, ReactNode, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { User } from "firebase/auth";

//__i-helper_________

import debugLoggerAuth from "../util/debugLoggerAuth";
import logCol from "../util/logColor";

//---------MAIN---------------\

type ContextValueType = {
  userObject: null | User;
  // authState: boolean;
  // setAuthState: React.Dispatch<React.SetStateAction<boolean>>;
  // setUserUID: React.Dispatch<React.SetStateAction<string>>;
};
const AuthContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthContextProvider: React.FC<{ children: ReactNode }> = function (pr) {
  let userObject: null | User = null;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        logCol("User is logged in!", "green");
        userObject = user;
        debugLoggerAuth(userObject);
      } else {
        logCol("User is NOT logged in!", "red");
        debugLoggerAuth(userObject);
      }
    });
  }, []);

  const AuthContextValues: ContextValueType = {
    userObject,
    // authState,
    // setUserUID,
    // setAuthState,
  };

  return (
    <AuthContextLocal.Provider value={AuthContextValues}>
      {pr.children}
    </AuthContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default AuthContextProvider;

export const AuthContext = function () {
  return useContext(AuthContextLocal);
};
