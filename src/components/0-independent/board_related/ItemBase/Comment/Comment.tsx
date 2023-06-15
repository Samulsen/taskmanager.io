//---------IMPORTS------------\

import classes from "./_Comment.module.scss";
import { FC } from "react";

//---------COMPONENT----------\
const Comment: FC<{ displayValue: string }> = function ({ displayValue }) {
  //__c-hooks________
  //__c-logic________

  const Logic = {
    UI: {
      renderDisplayableText() {
        if (displayValue.length > 42) {
          return displayValue.slice(0, 42) + "...";
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
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </div>
  );
};

//---------EXPORTS------------\
export default Comment;
