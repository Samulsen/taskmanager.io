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

interface ContextValueTypeConfig {
  state: string;
  autoDeleteOnDone: boolean;
}

interface QueryData {
  autoDeleteOnDone: boolean;
}

//SECTION______________________: Init Data

const coldData: ContextValueTypeConfig = {
  state: "cold",
  autoDeleteOnDone: false,
};

//SECTION______________________: Context objects

const ConfigContextLocal = createContext<ContextValueTypeConfig>(coldData);

//---------COMPONENT----------\

const ConfigContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const uid = AuthContext()?.userObject?.uid;
  const [configData, updateConfigData] = useState(coldData);

  //__c-logic________

  const Logic = {
    Data: {
      tempData: {} as ContextValueTypeConfig,
      deconstruct(configDataSnap: DocumentData) {
        const { autoDeleteOnDone }: QueryData = configDataSnap.data();
        this.tempData = { state: "warm", autoDeleteOnDone };
        return Logic.Data;
      },
      merge() {
        updateConfigData(this.tempData);
      },
    },
  };

  useEffect(() => {
    logCol("SnapshotHook: ConfigData => was initiated!", "rgb(255, 140, 98)");
    const unsub = onSnapshot(
      doc(db, `MainUserDataPool_${uid}`, "UserConfig"),
      (configDataSnap) => {
        Logic.Data.deconstruct(configDataSnap).merge();
      }
    );
    return unsub;
  }, []);

  useEffect(() => {
    logCol(
      `ConfigData Update: DeleteMode = ${configData.autoDeleteOnDone}`,
      "rgb(255, 140, 98)"
    );
  }, [configData]);

  const ConfigContextValues: ContextValueTypeConfig = {
    ...configData,
  };

  return (
    <ConfigContextLocal.Provider value={ConfigContextValues}>
      {children}
    </ConfigContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default ConfigContextProvider;
export const ConfigContext = function () {
  return useContext(ConfigContextLocal);
};
