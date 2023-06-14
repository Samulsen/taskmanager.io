//---------IMPORTS------------\

import classes from "./_DueToDate.module.scss";
import { FC } from "react";

//---------COMPONENT----------\
const DueToDate: FC<{ displayValue: number | string }> = function ({
  displayValue,
}) {
  return (
    <div className={classes.body}>
      <div className={classes.display}>{displayValue}</div>
      {/* <input type="date" /> */}
    </div>
  );
};

//---------EXPORTS------------\
export default DueToDate;
