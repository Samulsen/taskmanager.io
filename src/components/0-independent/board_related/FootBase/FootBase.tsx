//---------IMPORTS------------\

import { FC } from "react";
import classes from "./_FootBase.module.scss";

//---------COMPONENT----------\
const FootBase: FC<{ type: string }> = function ({ type }) {
  return (
    <div className={classes.body}>
      <div className={classes.grouplineLower}></div>
      <div className={classes.main}>
        <div className={classes.quad}></div>
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default FootBase;
