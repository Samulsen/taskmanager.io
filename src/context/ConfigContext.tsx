//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueType {}

//SECTION______________________: Context objects

const ConfigContextLocal = createContext<ContextValueType | null>(null);

const ConfigContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________
  //__c-logic________
  const ConfigContextValues: ContextValueType = {};

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
