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

//---------MAIN---------------\

export interface ContextValueTypeBoard {
  viewControl: { state: string; setState: Dispatch<SetStateAction<string>> };
  boardControl: { state: string; setState: Dispatch<SetStateAction<string>> };
}

//SECTION______________________: Context objects

const BoardContextLocal = createContext<ContextValueTypeBoard | null>(null);

const BoardContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const [viewControlSelection, setViewControlSelection] = useState("Home");
  const [boardListSelection, setBoardListSelection] = useState("total");

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
