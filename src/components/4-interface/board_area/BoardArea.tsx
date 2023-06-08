//---------IMPORTS------------\

import classes from "./_BoardArea.module.scss";
import { FC } from "react";
import BoardContextProvider from "../../../context/BoardContext";

//---------COMPONENT----------\

const BoardArea: FC<{ children: any }> = function ({ children: board }) {
  return (
    <div className={classes.body}>
      <BoardContextProvider>
        <div className={classes.views}></div>
        {board}
      </BoardContextProvider>
    </div>
  );
};

//---------EXPORTS------------\

export default BoardArea;
