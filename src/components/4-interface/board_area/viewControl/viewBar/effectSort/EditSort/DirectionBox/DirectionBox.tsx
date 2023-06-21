//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_DirectionBox.module.scss";
import ascIcon from "./ascending.svg";
import desIcon from "./descending.svg";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const DirectionBox: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.descending}>
        <img src={desIcon} alt="descendingIcon" />
      </div>
      <div className={classes.ascending}>
        <img src={ascIcon} alt="ascendingIcon" />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default DirectionBox;
