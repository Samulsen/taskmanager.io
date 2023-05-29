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
import { User, UserCredential } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//__i-helper_________

import debugLoggerAuth from "../util/debugLoggerAuth";
import logCol from "../util/logColor";

//---------MAIN---------------\

//SECTION______________________: Type definitions

const state = {
  //__NOTE: by default not evaluated because of async op of firebase auth, when returning => either true or false, private and public subscribed!
  cold: "UNEVALUATED",
  loggedIn: true,
  notLoggedIn: false,
};
type userStates = null | User;
type authStates = string | boolean;
type firebaseAuthMethod = (
  email: string,
  password: string
) => Promise<UserCredential>;
interface ContextValueType {
  userObject: userStates;
  authState: authStates;
  loggin: firebaseAuthMethod;
  register: firebaseAuthMethod;
  loggout: () => Promise<void>;
}

//SECTION______________________: Firebase functions

const loggin = function (email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
};

const register = function (email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loggout = function () {
  return signOut(auth);
};

//SECTION______________________: Context Object

const AuthContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthContextProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [userObject, setUserObject] = useState<userStates>(null);
  const [authState, setAuthState] = useState<authStates>(state.cold);
  debugLoggerAuth(userObject);
  useEffect(() => {
    logCol("onAuthStateChanged was initiated!", "orange");
    onAuthStateChanged(auth, (user) => {
      // setTimeout(() => {
      if (user) {
        setUserObject(user);
        setAuthState(state.loggedIn);
        // debugLoggerAuth(userObject);
      } else {
        setUserObject(user);
        // debugLoggerAuth(userObject);
        setAuthState(state.notLoggedIn);
      }
      // }, 1000);
    });
  }, []);

  const AuthContextValues: ContextValueType = {
    userObject,
    authState,
    loggin,
    register,
    loggout,
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
