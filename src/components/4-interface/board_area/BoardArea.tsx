//---------IMPORTS------------\

import classes from "./_BoardArea.module.scss";
import { FC } from "react";

//---------COMPONENT----------\

const BoardArea: FC<{ children: any }> = function ({ children }) {
  return <div className={classes.body}>{children}</div>;
};

//---------EXPORTS------------\

export default BoardArea;
