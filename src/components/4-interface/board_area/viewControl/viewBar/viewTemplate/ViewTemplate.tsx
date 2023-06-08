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
  return (
    <div className={classes.body}>
      <img className={classes.icon} src={icon} alt={`viewIcon${effect}`} />
      View - {effect}
    </div>
  );
};

//---------EXPORTS------------\
export default ViewTemplate;
