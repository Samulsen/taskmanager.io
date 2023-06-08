//---------IMPORTS------------\

import classes from "./_ViewTemplate.module.scss";
import { FC } from "react";

//---------MAIN---------------\

interface props {
  effect: string;
  icon: string;
}

//---------COMPONENT----------\

const ViewTemplate: FC<props> = function ({ effect, icon }) {
  const Logic = {
    evaluateStyle() {
      return true
        ? `${classes.body} ${classes.selected}`
        : `${classes.body} ${classes.unselected}`;
    },
  };

  return (
    <div className={Logic.evaluateStyle()}>
      <img className={classes.icon} src={icon} alt={`viewIcon${effect}`} />
      View - {effect}
    </div>
  );
};

//---------EXPORTS------------\
export default ViewTemplate;
