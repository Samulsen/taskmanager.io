//---------IMPORTS------------\

import classes from "./_Anchor.module.scss";
import { FC } from "react";

//---------COMPONENT----------\

const Anchor: FC<{ children: any }> = function ({ children }) {
  return <div className={classes.body}>{children}</div>;
};

//---------EXPORTS------------\

export default Anchor;
