//---------IMPORTS------------\

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import logCol from "../util/logColor";
import { DocumentData, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";

//---------MAIN---------------\

interface ContextValueTypeMetadata {
  state: string;
  firstName: string;
  lastName: string;
}

interface QueryData {
  firstName: string;
  lastName: string;
}

//SECTION______________________:

const coldData: ContextValueTypeMetadata = {
  state: "cold",
  firstName: "none",
  lastName: "none",
};

//SECTION______________________: Context objects

const MetaDataContextLocal = createContext<ContextValueTypeMetadata>(coldData);

const MetaDataContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const [metadata, setMetadata] = useState<ContextValueTypeMetadata>(coldData);
  const uid = AuthContext()?.userObject?.uid;

  //__c-logic________

  const Logic = {
    Data: {
      tempData: {} as ContextValueTypeMetadata,
      deconstruct(metadataSnap: DocumentData) {
        const { firstName, lastName }: QueryData = metadataSnap.data();
        this.tempData = { state: "warm", firstName, lastName };
        return Logic.Data;
      },
      merge() {
        setMetadata(this.tempData);
      },
    },
  };

  useEffect(() => {
    logCol("SnapshotHook: MetaData => was initiated!", "rgb(243, 248, 145)");
    const unsub = onSnapshot(
      doc(db, `MainUserDataPool_${uid}`, "UserMetaData"),
      (metadataSnap) => {
        Logic.Data.deconstruct(metadataSnap).merge();
      }
    );
    return unsub;
  }, []);

  const MetaDataContextValues: ContextValueTypeMetadata = {
    ...metadata,
  };

  return (
    <MetaDataContextLocal.Provider value={MetaDataContextValues}>
      {children}
    </MetaDataContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default MetaDataContextProvider;
export const MetaDataContext = function () {
  return useContext(MetaDataContextLocal);
};
