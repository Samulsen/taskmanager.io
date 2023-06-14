//---------IMPORTS------------\

import classes from "./_Comment.module.scss";
import { FC } from "react";

//---------COMPONENT----------\
const Comment: FC<{ displayValue: string }> = function ({ displayValue }) {
  return (
    <div className={classes.body}>
      <div className={classes.display}>{displayValue}</div>
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </div>
  );
};

//---------EXPORTS------------\
export default Comment;
