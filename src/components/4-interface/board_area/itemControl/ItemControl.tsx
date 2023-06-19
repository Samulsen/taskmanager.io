//---------IMPORTS------------\

import classes from "./_ItemControl.module.scss";
import SelectionMessage from "./selectionMessage/SelectionMessage";
import AbortSelection from "./abortSelection/AbortSelection";
import TargetDelete from "./targetDelete/TargetDelete";
import TargetDisplay from "./targetDisplay/TargetDisplay";

//---------COMPONENT----------\

const ItemControl = function () {
  //__c-hooks________

  //__c-logic________

  //__c-structure____

  return (
    <div className={classes.body}>
      <div className={classes.controler}>
        <TargetDisplay />
        <SelectionMessage />
        <TargetDelete />
        <AbortSelection />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default ItemControl;
