//---------IMPORTS------------\

import { createContext, FC, ReactNode, useContext, useState } from "react";

//---------MAIN---------------\

interface ContextValueTypeWorkspace {}

//SECTION______________________: Context objects

const WorkspaceContextLocal = createContext<ContextValueTypeWorkspace | null>(
  null
);

const WorkspaceContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________
  //__c-logic________
  const WorkspaceContextValues: ContextValueTypeWorkspace = {};

  return (
    <WorkspaceContextLocal.Provider value={WorkspaceContextValues}>
      {children}
    </WorkspaceContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default WorkspaceContextProvider;
export const WorkspaceContext = function () {
  return useContext(WorkspaceContextLocal);
};
