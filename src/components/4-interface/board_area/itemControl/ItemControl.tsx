//---------IMPORTS------------\
//__i-libraries______
import { AnimationEvent, useState } from "react";
//__i-style__________
import classes from "./_ItemControl.module.scss";
//__i-context________
import { ItemControlContext } from "../../../../context/ItemControlContext";
//__i-components_____
import SelectionMessage from "./selectionMessage/SelectionMessage";
import AbortSelection from "./abortSelection/AbortSelection";
import TargetDelete from "./targetDelete/TargetDelete";
import TargetCount from "./targetCount/TargetCount";

//---------COMPONENT----------\

const ItemControl = function () {
  //__c-hooks________

  const [mergedRequest, setMergeRequest] = useState("none");
  const { itemControl, closingMode } = ItemControlContext()!;

  //__c-logic________

  const Logic = {
    decideRendering() {
      if (itemControl.state) {
        if (mergedRequest === "none") return this.UI.Model.default();
        if (mergedRequest === "deletionRequest")
          return this.UI.Model.ongoingDeletion();
        else return <></>;
      } else {
        return this.UI.Model.closed();
      }
    },
    UI: {
      Model: {
        default() {
          return (
            <div
              className={Logic.UI.Class.forBody()}
              onAnimationEnd={Logic.UI.close}
            >
              <div className={classes.controler}>
                <TargetCount />
                <SelectionMessage />
                <TargetDelete
                  mergeRequest={{
                    current: mergedRequest,
                    setCurrent: setMergeRequest,
                  }}
                />
                <AbortSelection />
              </div>
            </div>
          );
        },
        closed() {
          return <></>;
        },
        ongoingDeletion() {
          return (
            <div
              className={Logic.UI.Class.forBody()}
              onAnimationEnd={Logic.UI.close}
            >
              <div className={classes.controler}>
                <TargetCount />
              </div>
            </div>
          );
        },
      },
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
