//---------IMPORTS------------\

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { itemdata } from "../types/types";

//----------PRE---------------\

//__p-types_________
export interface ContextValueTypeBoard {
  viewControl: { state: string; setState: Dispatch<SetStateAction<string>> };
  boardControl: { state: string; setState: Dispatch<SetStateAction<string>> };
  rawQueryItems: {
    data: itemdata[];
    setData: Dispatch<SetStateAction<itemdata[]>>;
  };
}

//__p-others________

const coldRawQueryData: itemdata[] = [
  {
    type: "coldDataItem",
    timestamp: "",
    board_origin: "",
    due_to_date: "",
    taskname: "EMPTY",
    status: "NONE",
    priority: 0,
    comment: "",
  },
];

//SECTION______________________: Context objects

const BoardContextLocal = createContext<ContextValueTypeBoard | null>(null);

const BoardContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const [viewControlSelection, setViewControlSelection] = useState("Home");
  const [boardListSelection, setBoardListSelection] = useState("total");
  const [rawQueryItems, setRawQueryItems] =
    useState<itemdata[]>(coldRawQueryData);

  //__c-logic________
  const BoardContextValues: ContextValueTypeBoard = {
    viewControl: {
      state: viewControlSelection,
      setState: setViewControlSelection,
    },
    boardControl: {
      state: boardListSelection,
      setState: setBoardListSelection,
    },
    rawQueryItems: {
      data: rawQueryItems,
      setData: setRawQueryItems,
    },
  };

  return (
    <BoardContextLocal.Provider value={BoardContextValues}>
      {children}
    </BoardContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default BoardContextProvider;
export const BoardContext = function () {
  return useContext(BoardContextLocal);
};
