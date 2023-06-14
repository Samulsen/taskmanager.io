//---------IMPORTS------------\

import classes from "./_Status.module.scss";
import { FC } from "react";

//---------COMPONENT----------\
const Status: FC<{ displayValue: string }> = function ({ displayValue }) {
  return (
    <div className={classes.body}>
      <div className={classes.display}>{displayValue}</div>
    </div>
  );
};

//---------EXPORTS------------\
export default Status;
