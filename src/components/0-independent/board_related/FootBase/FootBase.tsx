//---------IMPORTS------------\

import { FC } from "react";
import classes from "./_FootBase.module.scss";

//---------COMPONENT----------\
const FootBase: FC<{ type: string }> = function ({ type }) {
  const Logic = {
    UI: {
      evaluateType() {
        if (type === "total") {
          return (
            <div className={classes.forTotal}>
              Add task in specific board...
            </div>
          );
        } else {
        }
      },
    },
  };

  return (
    <div className={classes.body}>
      <div className={classes.grouplineLower}></div>
      <div className={classes.main}>
        <div className={classes.quad}></div>
        {Logic.UI.evaluateType()}
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default FootBase;
