//---------IMPORTS------------\

import classes from "./_InsideButtonLight.module.scss";
import { FC } from "react";

//---------MAIN---------------\

interface props {
  // individualClass: string;
  clickMethod: () => void;
  name: string;
  background: string;
}

//---------COMPONENT----------\

const InsideButtonLight: FC<props> = function (props) {
  const Logic = {
    evaluateColor() {
      return props.background === "neutral" ? classes.neutral : classes.reddish;
    },
  };

  return (
    <div className={`${classes.body} ${Logic.evaluateColor()}`}>
      {props.name}
    </div>
  );
};

//---------EXPORTS------------\

export default InsideButtonLight;
