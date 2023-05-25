//---------IMPORTS------------\

import { createContext, useState, ReactNode } from "react";

//---------MAIN---------------\

type ContextValueType = {
  authState: boolean;
  login: () => void;
};
const AuthContext = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const AuthProvider: React.FC<{ children: ReactNode }> = function (props) {
  const [authState, setAuthState] = useState(false);

  const login = () => {
    setAuthState(true);
  };

  const contextValues = {
    authState,
    login,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

//---------EXPORTS------------\

export default AuthProvider;
