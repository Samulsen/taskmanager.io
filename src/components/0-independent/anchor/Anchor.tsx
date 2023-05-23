//---------IMPORTS------------\

import classes from "./_Anchor.module.scss";
import { ReactNode } from "react";

//---------COMPONENT----------\

const Anchor: React.FC<{ children: ReactNode }> = function (props) {
  return <div className={classes.anchor}>{props.children}</div>;
};

//---------EXPORTS------------\

export default Anchor;
