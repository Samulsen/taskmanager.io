//---------IMPORTS------------\

import classes from "./_BoardOrigin.module.scss";
import { FC } from "react";

//---------COMPONENT----------\

const BoardOrigin: FC<{ displayValue: string | undefined }> = function ({
  displayValue,
}) {
  return (
    <div className={classes.body}>
      <div className={classes.display}>{displayValue}</div>
    </div>
  );
};

//---------EXPORTS------------\
export default BoardOrigin;
