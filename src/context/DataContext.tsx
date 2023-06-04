//---------IMPORTS------------\

import { db } from "../firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import logCol from "../util/logColor";

//---------MAIN---------------\

//SECTION______________________: Type definitions

interface ContextValueType {
  appMetaData: appMetaData | string;
}

type boardNames = { boardNames: string[] };
type userMetaData = { firstName: string; lastName: string };

interface docType {
  id: string;
  data: () => userMetaData | boardNames;
}

interface appMetaData {
  firstName: string;
  lastName: string;
  config: { autoDeleteOnDone: boolean };
  boardNames: string[];
}

//SECTION______________________: Firebase References

//SECTION______________________: Context Object

const DataContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const DataContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const uid = AuthContext()?.userObject?.uid;
  const [appMetaData, setAppMetaData] = useState<appMetaData | string>("cold");

  //__c-logic________

  const Logic = {
    initChain() {
      return Promise.resolve();
    },
    Metadata: {
      getSnapshot() {
        return getDocs(collection(db, `MainUserDataPool_${uid}`));
      },
      deconstruct(docData: DocumentData) {
        return new Promise((resolve) => {
          const tempMetaData: appMetaData = {
            firstName: "",
            lastName: "",
            config: { autoDeleteOnDone: true },
            boardNames: [],
          };
          docData.forEach((doc: docType) => {
            if (doc.id === "UserBoards") {
              tempMetaData.boardNames = (doc.data() as boardNames).boardNames;
            }
            if (doc.id === "UserConfig") {
              tempMetaData.firstName = (doc.data() as userMetaData).firstName;
              tempMetaData.lastName = (doc.data() as userMetaData).lastName;
            }
          });
          resolve(tempMetaData);
        });
      },
      merge(tempMetaData: unknown) {
        // setAppMetaData(appMetaData);
        logCol("Updated App Meta Data!", "greenyellow");
        console.log(tempMetaData);
      },
    },
  };

  Logic.initChain()
    .then(Logic.Metadata.getSnapshot)
    .then(Logic.Metadata.deconstruct)
    .then(Logic.Metadata.merge);

  const DataContextValues: ContextValueType = { appMetaData };

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
