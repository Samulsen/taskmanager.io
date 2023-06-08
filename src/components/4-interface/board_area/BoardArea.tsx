//---------IMPORTS------------\

import classes from "./_BoardArea.module.scss";
import { FC } from "react";
import BoardContextProvider from "../../../context/BoardContext";
import ViewControl from "./viewControl/ViewControl";

//---------COMPONENT----------\

const BoardArea: FC<{ children: any }> = function ({ children: board }) {
  return (
    <div className={classes.body}>
      <BoardContextProvider>
        <ViewControl />
        {board}
      </BoardContextProvider>
    </div>
  );
};

//---------EXPORTS------------\

export default BoardArea;
