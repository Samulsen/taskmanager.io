//---------IMPORTS------------\

import { db } from "../firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";
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
  //__c-hooks________

  const uid = AuthContext()?.userObject?.uid;

  //__c-logic________

  const Logic = {
    initChain() {
      return Promise.resolve();
    },
    getSnapshot() {
      return getDocs(collection(db, `MainUserDataPool_${uid}`));
    },
    handleSnapshot(docData: DocumentData) {
      docData.forEach((doc: any) => {
        console.log(doc.data());
      });
    },
  };

  Logic.initChain().then(Logic.getSnapshot).then(Logic.handleSnapshot);

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
