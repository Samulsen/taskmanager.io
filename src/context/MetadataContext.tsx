//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueTypeMetadata {}

//SECTION______________________: Context objects

const MetaDataContextLocal = createContext<ContextValueTypeMetadata | null>(
  null
);

const MetaDataContextProvider: FC<{ children: ReactNode }> = function () {
  //__c-hooks________
  //__c-logic________
  const MetaDataContextValues: ContextValueTypeMetadata = {};

  return (
    <MetaDataContextLocal.Provider
      value={MetaDataContextValues}
    ></MetaDataContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default MetaDataContextProvider;
export const MetaDataContext = function () {
  return useContext(MetaDataContextLocal);
};
