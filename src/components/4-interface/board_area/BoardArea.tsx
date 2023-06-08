//---------IMPORTS------------\

import classes from "./_BoardArea.module.scss";
import { FC } from "react";

//---------COMPONENT----------\

const BoardArea: FC<{ children: any }> = function ({ children: outlet }) {
  return (
    <div className={classes.body}>
      <div className={classes.views}></div>
      <div className={classes.boardspace}>{outlet}</div>
    </div>
  );
};

//---------EXPORTS------------\

export default BoardArea;
