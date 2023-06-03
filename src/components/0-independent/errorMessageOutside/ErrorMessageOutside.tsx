//---------IMPORTS------------\

import classes from "./_ErrorMessageOutside.module.scss";
import { FC } from "react";

//---------MAIN---------------\

interface props {
  message: string | null;
}

//---------COMPONENT----------\

const ErrorMessageOutside: FC<props> = function (props) {
  return (
    <div className={classes.body}>
      <div className={classes.line}></div>
      <div className={classes.message}>
        <span className={classes.errorPart}>Error</span>
        <span>: {props.message}</span>
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default ErrorMessageOutside;
