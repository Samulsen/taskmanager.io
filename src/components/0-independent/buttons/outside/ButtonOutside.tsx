//---------IMPORTS------------\

import classes from "./_ButtonOutside.module.scss";
import { FC } from "react";

//---------MAIN---------------\

type props = { border: string; displayText: string; clickMethod: any };

//---------COMPONENT----------\

const ButtonOutside: FC<props> = function (props) {
  const Logic = {
    evaluteClassList() {
      let classList;
      if (props.border === "white") {
        classList = classes.body + " " + classes.border_white;
        return classList;
      }
      if (props.border === "green") {
        classList = classes.body + " " + classes.border_green;
        return classList;
      }

      if (props.border === "invalid") {
        classList = classes.body + " " + classes.border_invalid;
        return classList;
      }

      if (props.border === "valid") {
        classList = classes.body + " " + classes.border_valid;
        return classList;
      }
    },
  };

  return (
    <div className={Logic.evaluteClassList()} onClick={props.clickMethod}>
      {props.displayText}
    </div>
  );
};

//---------EXPORTS------------\

export default ButtonOutside;
