//---------IMPORTS------------\

import classes from "./_Task.module.scss";
import { FC } from "react";

//---------COMPONENT----------\

const Task: FC<{ displayValue: string }> = function ({ displayValue }) {
  //__c-logic________

  const Logic = {
    UI: {
      renderDisplayableText() {
        if (displayValue.length > 29) {
          return displayValue.slice(0, 29) + "...";
        } else {
          return displayValue;
        }
      },
    },
  };

  //__c-structure____

  return (
    <div className={classes.body}>
      <div className={classes.display}>{Logic.UI.renderDisplayableText()}</div>
    </div>
  );
};

//---------EXPORTS------------\
export default Task;
