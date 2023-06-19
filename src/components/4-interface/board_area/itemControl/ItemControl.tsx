//---------IMPORTS------------\

import classes from "./_ItemControl.module.scss";
import SelectionMessage from "./selectionMessage/SelectionMessage";
import AbortSelection from "./abortSelection/AbortSelection";
import TargetDelete from "./targetDelete/TargetDelete";
import TargetDisplay from "./targetDisplay/TargetDisplay";
import { ItemControlContext } from "../../../../context/ItemControlContext";
import { useState } from "react";

//---------COMPONENT----------\

const ItemControl = function () {
  //__c-hooks________

  const { Mode } = ItemControlContext()!;
  const [activeClosing, setActiveClosing] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      Class: {
        forBody() {
          return activeClosing
            ? `${classes.body} ${classes.close}`
            : `${classes.body} ${classes.open}`;
        },
      },

      initializeClosing() {
        setActiveClosing(true);
      },

      close() {
        Mode.setState(false);
      },
    },
  };

  //__c-structure____

  return (
    <div className={Logic.UI.Class.forBody()} onAnimationEnd={Logic.UI.close}>
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
