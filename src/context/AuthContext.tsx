//---------IMPORTS------------\

import { createContext, useState, ReactNode, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

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

  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         console.log("User is logged in!");
  //         setUserUID(user.uid);
  //         setAuthState(true);
  //         console.log(authState);
  //       } else {
  //         console.log("user is not logged in!");
  //         setAuthState(false);
  //       }
  //     });
  //   }, []);

  // console.warn("Auth context ran!!!");
  // console.log("current log state of app= " + authState);
  // console.log("current user= " + userUID);

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
