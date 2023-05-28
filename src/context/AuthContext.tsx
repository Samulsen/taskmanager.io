//---------IMPORTS------------\

//__i-libraries______

import {
  createContext,
  ReactNode,
  useEffect,
  useContext,
  useState,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { User } from "firebase/auth";

//__i-helper_________

import debugLoggerAuth from "../util/debugLoggerAuth";
import logCol from "../util/logColor";

//---------MAIN---------------\

type userStates = null | User;

type ContextValueType = {
  userObject: userStates;
};
const AuthContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthContextProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [userObject, setUserObject] = useState<userStates>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        logCol("User is logged in!", "green");
        setUserObject(user);
        debugLoggerAuth(userObject);
      } else {
        logCol("User is NOT logged in!", "red");
        debugLoggerAuth(userObject);
      }
    });
  }, []);

  const AuthContextValues: ContextValueType = {
    userObject,
  };

  return (
    <AuthContextLocal.Provider value={AuthContextValues}>
      {children}
    </AuthContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default AuthContextProvider;

export const AuthContext = function () {
  return useContext(AuthContextLocal);
};
