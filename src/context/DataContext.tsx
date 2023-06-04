//---------IMPORTS------------\

import { db } from "../firebase";
import { createContext, FC, ReactNode, useContext } from "react";

//---------MAIN---------------\

//SECTION______________________: Type definitions

interface ContextValueType {}

//SECTION______________________: Firebase References

//SECTION______________________: Context Object

const DataContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const DataContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  const DataContextValues: ContextValueType = {};

  return (
    <DataContextLocal.Provider value={DataContextValues}>
      {children}
    </DataContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default DataContextProvider;
export const DataContext = function () {
  return useContext(DataContextLocal);
};
