//---------IMPORTS------------\

import { createContext, useState, ReactNode } from "react";

//---------MAIN---------------\

type ContextValueType = {
  userData: string;
  authState: boolean;
  login: () => void;
  logout: () => void;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
};
export const AuthContextAnchor = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthContext: React.FC<{ children: ReactNode }> = function (props) {
  const [authState, setAuthState] = useState(false);
  const [userData, setUserData] = useState("User-1");

  const login = () => {
    setAuthState(true);
  };

  const logout = () => {
    setAuthState(false);
  };

  const AuthContextValues = {
    userData,
    authState,
    login,
    logout,
    setUserData,
  };

  return (
    <AuthContextAnchor.Provider value={AuthContextValues}>
      {props.children}
    </AuthContextAnchor.Provider>
  );
};

//---------EXPORTS------------\

export default AuthContext;
