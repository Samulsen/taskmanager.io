//---------IMPORTS------------\

//__i-libraries______
import { FC, MouseEvent } from "react";
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
    handleDirectionRequest(event: MouseEvent) {
      const origin = event.target as HTMLElement;
      const receiver = event.currentTarget as HTMLElement;
      const idArr = [
        `${direction}NumBox`,
        `${direction}Start`,
        `${direction}End`,
        `${direction}Icon`,
      ];

      if (origin === receiver || idArr.includes(origin.id)) {
        sortControl.setDirection(direction);
      }
    },
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
    <div
      className={Logic.UI.Classes.forBody()}
      onClick={Logic.handleDirectionRequest}
    >
      <div id={`${direction}NumBox`} className={classes.num}>
        <span id={`${direction}Start`}>{start}</span>
        <span id={`${direction}End`}>{end}</span>
      </div>
      <img
        id={`${direction}Icon`}
        className={classes.icon}
        src={icon}
        alt={`${direction}OptionIconSort`}
      />
    </div>
  );
};

//---------EXPORTS------------\

export default DirectionOption;
