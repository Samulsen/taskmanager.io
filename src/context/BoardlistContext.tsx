//---------IMPORTS------------\

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { AuthContext } from "./AuthContext";
import { DocumentData, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import logCol from "../util/logColor";

//----------PRE---------------\

//__p-types_________

type id = string;
type BoardMetaData = {
  name: string;
  timestamp: { seconds: number; nanoseconds: number };
};
type boardNamesArray = [id, BoardMetaData][];

interface ContextValueTypeBoardlist {
  state: string;
  boardNames: boardNamesArray;
}

interface QueryData {
  boardNames: {
    [id: id]: BoardMetaData;
  };
}

//SECTION______________________: InitData

const coldData: ContextValueTypeBoardlist = {
  state: "cold",
  boardNames: [] as boardNamesArray,
};

//SECTION______________________: Context objects

const BoardlistContextLocal =
  createContext<ContextValueTypeBoardlist>(coldData);

const BoardlistContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const uid = AuthContext()?.userObject?.uid;
  const [boardNamesList, updateBoardNamesList] = useState(coldData);

  //__c-logic________

  const Logic = {
    Data: {
      tempData: {} as ContextValueTypeBoardlist,
      deconstruct(boardNamesSnapshot: DocumentData) {
        this.tempData = {
          state: "warm",
          boardNames: (
            Object.entries(
              boardNamesSnapshot.data()!.boardNames as QueryData
            ) as boardNamesArray
          ).filter(([boardId]) => boardId !== "initialField"),
        };
        return Logic.Data;
      },
      merge() {
        updateBoardNamesList(this.tempData);
      },
    },
  };

  useEffect(() => {
    logCol(
      "SnapshotHook: Boardlist Data => was initiated!",
      "rgb(175, 243, 29)"
    );
    const unsub = onSnapshot(
      doc(db, `MainUserDataPool_${uid}`, "UserBoards"),
      { includeMetadataChanges: true },
      (boardNamesSnapshot) => {
        if (!boardNamesSnapshot.metadata.hasPendingWrites) {
          Logic.Data.deconstruct(boardNamesSnapshot).merge();
        }
      }
    );

    return unsub;
  }, []);

  const BoardlistContextValues: ContextValueTypeBoardlist = {
    ...boardNamesList,
  };

  return (
    <BoardlistContextLocal.Provider value={BoardlistContextValues}>
      {children}
    </BoardlistContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default BoardlistContextProvider;
export const BoardlistContext = function () {
  return useContext(BoardlistContextLocal);
};
