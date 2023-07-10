//---------IMPORTS------------\

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CompositItemData } from "../types/types";
import { coldRawQueryData } from "./BoardContext";

//----------PRE---------------\
interface ContextValueType {
  clientAffectedData: CompositItemData[];
  setClienAffectedData: Dispatch<SetStateAction<CompositItemData[]>>;
}

//SECTION______________________: Context objects

const ActiveDataContextLocal = createContext<ContextValueType | null>(null);

const ActiveDataContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const [clientAffectedData, setAffectedData] = useState(coldRawQueryData);

  //__c-logic________
  const ActiveDataContextValues: ContextValueType = {
    clientAffectedData: clientAffectedData,
    setClienAffectedData: setAffectedData,
  };

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
