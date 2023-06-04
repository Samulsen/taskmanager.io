//---------IMPORTS------------\

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { createContext, FC, ReactNode, useContext } from "react";
import { AuthContext } from "./AuthContext";

//---------MAIN---------------\

//SECTION______________________: Type definitions

interface ContextValueType {
  teststring: string;
}

const teststring = "eeeee";

//SECTION______________________: Firebase References

//SECTION______________________: Context Object

const DataContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const DataContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //SECTION______________________: get main pool reference

  //   const uid = AuthContext()?.userObject?.uid;
  //     const mainUserDataPoolCollection = uid
  //       ? collection(db, `MainUserDataPool_GpCgW56iXEgj94Gj2aANA7Em23G3`)
  //       : null;
  const mainUserDataPoolCollection = collection(
    db,
    `MainUserDataPool_GpCgW56iXEgj94Gj2aANA7Em23G3`
  );

  //SECTION______________________: return structure

  const DataContextValues: ContextValueType = { teststring };

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
