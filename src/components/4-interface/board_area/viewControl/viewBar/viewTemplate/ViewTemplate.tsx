//---------IMPORTS------------\

import classes from "./_ViewTemplate.module.scss";
import { FC, MouseEvent } from "react";
import {
  BoardContext,
  ContextValueTypeBoard,
} from "../../../../../../context/BoardContext";

//----------PRE---------------\

//__p-types_________
interface props {
  effect: string;
  icon: string;
}

//---------COMPONENT----------\

const ViewTemplate: FC<props> = function ({ effect, icon }) {
  const {
    viewControl: { state, setState },
  } = BoardContext() as ContextValueTypeBoard;

  const Logic = {
    setSelfSelection(event: MouseEvent) {
      if (event.target === event.currentTarget) {
        setState(effect);
      }
    },
    evaluateStyle() {
      let mystate;

      if (state === "Home" && state === effect) {
        mystate = true;
      }
      if (state === "Unassigned" && state === effect) {
        mystate = true;
      }
      if (state === "Done" && state === effect) {
        mystate = true;
      }
      if (state === "In Progress" && state === effect) {
        mystate = true;
      }
      if (state === "Untouched" && state === effect) {
        mystate = true;
      }

      return mystate
        ? `${classes.body} ${classes.selected}`
        : `${classes.body} ${classes.unselected}`;
    },
  };

  return (
    <div onClick={Logic.setSelfSelection} className={Logic.evaluateStyle()}>
      <img className={classes.icon} src={icon} alt={`viewIcon${effect}`} />
      View - {effect}
    </div>
  );
};

//---------EXPORTS------------\
export default ViewTemplate;
