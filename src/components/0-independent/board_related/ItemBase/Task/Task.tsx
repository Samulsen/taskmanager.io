//---------IMPORTS------------\

import classes from "./_Task.module.scss";
import { FC } from "react";

//---------COMPONENT----------\

const Task: FC<{ displayValue: string }> = function ({ displayValue }) {
  return (
    <div className={classes.body}>
      <div className={classes.display}>{displayValue}</div>
    </div>
  );
};

//---------EXPORTS------------\
export default Task;
