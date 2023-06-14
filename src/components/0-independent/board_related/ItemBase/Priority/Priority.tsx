//---------IMPORTS------------\

import classes from "./_Priority.module.scss";
import { FC } from "react";

//---------COMPONENT----------\
const Priority: FC<{ displayValue: number }> = function ({ displayValue }) {
  return (
    <div className={classes.body}>
      <div className={classes.display}>1</div>
      {/* <input type="number" name="" id="" /> */}
    </div>
  );
};

//---------EXPORTS------------\
export default Priority;
