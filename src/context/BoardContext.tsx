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
import { CompositItemData } from "../types/types";

//----------PRE---------------\

//__p-types_________
export interface ContextValueTypeBoard {
  viewControl: { state: string; setState: Dispatch<SetStateAction<string>> };
  filterControl: { state: string; setState: Dispatch<SetStateAction<string>> };
  sortControl: {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    direction: string;
    setDirection: Dispatch<SetStateAction<string>>;
  };
  boardControl: { state: string; setState: Dispatch<SetStateAction<string>> };
  rawQueryItems: {
    data: CompositItemData[];
    setData: Dispatch<SetStateAction<CompositItemData[]>>;
  };
}

//__p-others________

export const coldRawQueryData: CompositItemData[] = [
  {
    id: "null",
    type: "coldDataItem",
    timestamp: "",
    board_origin: "origin",
    due_to_date: "2018-07-22",
    taskname: "taskname",
    status: "default",
    priority: "",
    comment: "comment",
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
  const [filterControlSelection, setfilterControlSelection] = useState("none");
  const [sortControlSelection, setSortControlSelection] = useState("Itemage");
  const [sortControlDirection, setSortControlDirection] = useState("des");
  const [rawQueryItems, setRawQueryItems] =
    useState<CompositItemData[]>(coldRawQueryData);

  //__c-logic________

  const BoardContextValues: ContextValueTypeBoard = {
    viewControl: {
      state: viewControlSelection,
      setState: setViewControlSelection,
    },
    filterControl: {
      state: filterControlSelection,
      setState: setfilterControlSelection,
    },
    sortControl: {
      state: sortControlSelection,
      setState: setSortControlSelection,
      direction: sortControlDirection,
      setDirection: setSortControlDirection,
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

  //__c-structure____

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
