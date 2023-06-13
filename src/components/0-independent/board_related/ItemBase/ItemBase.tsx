//---------IMPORTS------------\

import { FC } from "react";
import classes from "./_ItemBase.module.scss";

//---------COMPONENT----------\
const ItemBase: FC<{ type: string }> = function () {
  return (
    <div className={classes.body}>
      <div className={classes.grouplineMid}></div>
      <div className={classes.main}>
        <div className={classes.marker}>
          <div className={classes.box}></div>
        </div>
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default ItemBase;
