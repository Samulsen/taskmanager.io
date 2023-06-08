//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueType {}

//SECTION______________________: Context objects

const BoardContextLocal = createContext<ContextValueType | null>(null);

const BoardContextProvider: FC<{ children: ReactNode }> = function () {
  //__c-hooks________
  //__c-logic________
  const BoardContextValues: ContextValueType = {};

  return (
    <BoardContextLocal.Provider
      value={BoardContextValues}
    ></BoardContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default BoardContextProvider;
export const BoardContext = function () {
  return useContext(BoardContextLocal);
};
