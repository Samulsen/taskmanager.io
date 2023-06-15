//---------IMPORTS------------\

import classes from "./_Status.module.scss";
import { FC } from "react";

//---------COMPONENT----------\
const Status: FC<{ displayValue: string }> = function ({ displayValue }) {
  const Logic = {
    UI: {
      renderLabel() {
        if (displayValue === "none") {
          return (
            <div className={`${classes.display} ${classes.default}`}></div>
          );
        }

        if (displayValue === "done") {
          return (
            <div className={`${classes.display} ${classes.done}`}>Done!</div>
          );
        }

        if (displayValue === "progress") {
          return (
            <div className={`${classes.display} ${classes.progress}`}>
              In Progress!
            </div>
          );
        }
        if (displayValue === "untouched") {
          return (
            <div className={`${classes.display} ${classes.untouched}`}>
              Untouched!
            </div>
          );
        }
      },
    },
  };

  return <div className={classes.body}>{Logic.UI.renderLabel()}</div>;
};

//---------EXPORTS------------\
export default Status;
