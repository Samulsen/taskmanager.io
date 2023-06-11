//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueTypeBoardlist {}

//SECTION______________________: Context objects

const BoardlistContextLocal = createContext<ContextValueTypeBoardlist | null>(
  null
);

const BoardlistContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________
  //__c-logic________
  const BoardlistContextValues: ContextValueTypeBoardlist = {};

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
