//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueType {
  test: string;
}

//SECTION______________________: Context objects

const BoardContextLocal = createContext<ContextValueType | null>(null);

const BoardContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________
  //__c-logic________
  const BoardContextValues: ContextValueType = {
    test: "this is a test",
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
