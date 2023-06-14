//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueType {}

//SECTION______________________: Context objects

const ActiveDataContextLocal = createContext<ContextValueType | null>(null);

const ActiveDataContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________
  //__c-logic________
  const ActiveDataContextValues: ContextValueType = {};

  return (
    <ActiveDataContextLocal.Provider value={ActiveDataContextValues}>
      {children}
    </ActiveDataContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default ActiveDataContextProvider;
export const ActiveDataContext = function () {
  return useContext(ActiveDataContextLocal);
};
