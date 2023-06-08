//---------IMPORTS------------\

import classes from "./_ViewTemplate.module.scss";
import { FC, Dispatch, SetStateAction } from "react";

//---------MAIN---------------\

interface props {
  effect: string;
  icon: string;
  selectionState: string;
  setSelection: Dispatch<SetStateAction<string>>;
}

//---------COMPONENT----------\

const ViewTemplate: FC<props> = function ({
  effect,
  icon,
  selectionState,
  setSelection,
}) {
  const Logic = {
    setSelfSelection() {
      setSelection(effect);
    },
    evaluateStyle() {
      let mySelectionState;

      if (selectionState === "Home" && selectionState === effect) {
        mySelectionState = true;
      }
      if (selectionState === "Done" && selectionState === effect) {
        mySelectionState = true;
      }
      if (selectionState === "In Progress" && selectionState === effect) {
        mySelectionState = true;
      }
      if (selectionState === "Untouched" && selectionState === effect) {
        mySelectionState = true;
      }

      return mySelectionState
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
