//---------IMPORTS------------\
//__i-libraries______
import { db } from "../firebase";
import { DocumentData, collection, onSnapshot } from "firebase/firestore";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
//__i-context________
import { AuthContext } from "./AuthContext";
//__i-helper_________
import debugLoggerData from "../util/debugLoggerData";
import logCol from "../util/logColor";

//---------MAIN---------------\

//SECTION______________________: Type definitions

interface ContextValueType {
  appMetaData: appMetaData | string;
}

type userBoards = {
  boardNames: {
    [key: string]: {
      name: string;
      timestamp: { seconds: number; nanoseconds: number };
    };
  };
};
type userMetaData = { firstName: string; lastName: string };
type userConfig = { autoDeleteOnDone: boolean };

interface docType {
  id: string;
  data: () => userMetaData | userBoards | userConfig;
}

export interface appMetaData {
  firstName: string;
  lastName: string;
  config: userConfig;
  boardNames: [
    string,
    { name: string; timestamp: { seconds: number; nanoseconds: number } }
  ][];
}

//SECTION______________________: Context Object

const DataContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const DataContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________
  const uid = AuthContext()?.userObject?.uid;
  const [appMetaData, setAppMetaData] = useState<appMetaData | string>("cold");
  debugLoggerData(appMetaData);

  //__c-logic________

  const Logic = {
    initChain() {
      return Promise.resolve();
    },
    Metadata: {
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
              tempMetaData.boardNames = Object.entries(
                (doc.data() as userBoards).boardNames
              );
              // tempMetaData.boardNames = (doc.data() as userBoards).boardNames;
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
      },
    },
  };

  useEffect(() => {
    logCol("onSnapshot appMetaData was iniated!", "orangered");
    let unsub = onSnapshot(
      collection(db, `MainUserDataPool_${uid}`),
      (docData) => {
        if (!docData.metadata.hasPendingWrites) {
          Logic.Metadata.deconstruct(docData).then(Logic.Metadata.merge);
        }
      }
    );
    return unsub;
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
