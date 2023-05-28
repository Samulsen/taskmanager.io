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
interface ContextValueType {
  userObject: userStates;
  coldState: string;
}
const AuthContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthContextProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [userObject, setUserObject] = useState<userStates>(null);
  const [coldState, setColdState] = useState("cold");

  useEffect(() => {
    logCol("onAuthStateChanged was initiated!", "orange");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObject(user);
        setColdState("isLoggedIn");
        debugLoggerAuth(userObject);
      } else {
        setUserObject(user);
        debugLoggerAuth(userObject);
        setColdState("isNotLogged");
      }
    });
  }, []);

  const AuthContextValues: ContextValueType = {
    userObject,
    coldState,
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
