//---------IMPORTS------------\

import { db } from "../firebase";
import {
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "./AuthContext";
import logCol from "../util/logColor";

//---------MAIN---------------\

//SECTION______________________: Type definitions

interface ContextValueType {
  appMetaData: appMetaData | string;
}

type userBoards = { boardNames: string[] };
type userMetaData = { firstName: string; lastName: string };
type userConfig = { autoDeleteOnDone: boolean };

interface docType {
  id: string;
  data: () => userMetaData | userBoards | userConfig;
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
      deconstruct(docData: DocumentData): Promise<appMetaData> {
        return new Promise((resolve) => {
          const tempMetaData: appMetaData = {
            firstName: "",
            lastName: "",
            config: { autoDeleteOnDone: true },
            boardNames: [],
          };
          docData.forEach((doc: docType) => {
            if (doc.id === "UserBoards") {
              tempMetaData.boardNames = (doc.data() as userBoards).boardNames;
            }
            if (doc.id === "UserMetaData") {
              tempMetaData.firstName = (doc.data() as userMetaData).firstName;
              tempMetaData.lastName = (doc.data() as userMetaData).lastName;
            }
            if (doc.id === "UserConfig") {
              tempMetaData.config.autoDeleteOnDone = (
                doc.data() as userConfig
              ).autoDeleteOnDone;
            }
          });
          resolve(tempMetaData);
        });
      },
      merge(tempMetaData: appMetaData) {
        setAppMetaData(tempMetaData);
        logCol("Updated App Meta Data!", "greenyellow");
      },
    },
  };

  useEffect(() => {
    Logic.initChain()
      .then(Logic.Metadata.getSnapshot)
      .then(Logic.Metadata.deconstruct)
      .then(Logic.Metadata.merge);

    // onSnapshot(collection(db, `MainUserDataPool_${uid}`), (snapshot) => {
    //   snapshot.forEach((doc) => {
    //     console.log(doc.data());
    //   });
    // });
  }, []);

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
