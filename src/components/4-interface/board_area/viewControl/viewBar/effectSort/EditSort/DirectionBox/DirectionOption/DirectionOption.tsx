//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_DirectionOption.module.scss";
//__i-context________
import { BoardContext } from "../../../../../../../../../context/BoardContext";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {
  direction: string;
  start: number;
  end: number;
  icon: string;
}

//---------COMPONENT----------\

const DirectionOption: FC<props> = function ({ start, end, icon, direction }) {
  //__c-hooks________

  const { sortControl } = BoardContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      Classes: {
        forBody() {
          return sortControl.direction === direction
            ? `${classes.body} ${classes.selected}`
            : `${classes.body} ${classes.unselected}`;
        },
      },
    },
    Data: {},
  };

  //__c-structure____
  return (
    <div className={Logic.UI.Classes.forBody()}>
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
