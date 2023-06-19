//---------IMPORTS------------\

import classes from "./_ItemControl.module.scss";
import SelectionMessage from "./selectionMessage/SelectionMessage";
import AbortSelection from "./abortSelection/AbortSelection";
import TargetDelete from "./targetDelete/TargetDelete";
import TargetDisplay from "./targetDisplay/TargetDisplay";
import { ItemControlContext } from "../../../../context/ItemControlContext";
import { useState, AnimationEvent } from "react";

//---------COMPONENT----------\

const ItemControl = function () {
  //__c-hooks________

  const { ItemControl } = ItemControlContext()!;
  const [activeClosing, setActiveClosing] = useState(false);

  //__c-logic________

  const Logic = {
    decideRendering() {
      if (ItemControl.state) {
        return (
          <div
            onClick={Logic.UI.initializeClosing}
            className={Logic.UI.Class.forBody()}
            onAnimationEnd={Logic.UI.close}
          >
            <div className={classes.controler}>
              <TargetDisplay />
              <SelectionMessage />
              <TargetDelete />
              <AbortSelection />
            </div>
          </div>
        );
      } else {
        return <></>;
      }
    },
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
      close(event: AnimationEvent) {
        if (event.target === event.currentTarget) {
          if (event.animationName.includes("closeItemControl"))
            ItemControl.setState(false);
        }
      },
    },
  };

  //__c-structure____

  return Logic.decideRendering();
};

//---------EXPORTS------------\

export default ItemControl;
