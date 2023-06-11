//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueTypeConfig {
  state: string;
  autoDeleteOnDone: boolean;
}

//SECTION______________________: Init Data

const coldData: ContextValueTypeConfig = {
  state: "cold",
  autoDeleteOnDone: false,
};

//SECTION______________________: Context objects

const ConfigContextLocal = createContext<ContextValueTypeConfig>(coldData);

//---------COMPONENT----------\

const ConfigContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________
  //__c-logic________
  const ConfigContextValues: ContextValueTypeConfig = {
    ...coldData,
  };

  return (
    <ConfigContextLocal.Provider value={ConfigContextValues}>
      {children}
    </ConfigContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default ConfigContextProvider;
export const ConfigContext = function () {
  return useContext(ConfigContextLocal);
};
