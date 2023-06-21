//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_DirectionOption.module.scss";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  start: number;
  end: number;
  icon: string;
}

//---------COMPONENT----------\

const DirectionOption: FC<props> = function ({ start, end, icon }) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.num}>
        <span>{start}</span>
        <span>{end}</span>
      </div>
      <img className={classes.icon} src={icon} alt="" />
    </div>
  );
};

//---------EXPORTS------------\

export default DirectionOption;
