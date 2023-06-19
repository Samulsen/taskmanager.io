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

  const { itemControl, closingMode } = ItemControlContext()!;

  //__c-logic________

  const Logic = {
    decideRendering() {
      if (itemControl.state) {
        return (
          <div
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
          return closingMode.state
            ? `${classes.body} ${classes.close}`
            : `${classes.body} ${classes.open}`;
        },
      },

      close(event: AnimationEvent) {
        if (event.target === event.currentTarget) {
          if (event.animationName.includes("closeItemControl")) {
            closingMode.setState(false);
            itemControl.setState(false);
          }
        }
      },
    },
  };

  //__c-structure____

  return Logic.decideRendering();
};

//---------EXPORTS------------\

export default ItemControl;
