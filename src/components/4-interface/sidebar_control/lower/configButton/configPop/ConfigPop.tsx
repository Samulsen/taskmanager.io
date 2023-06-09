//---------IMPORTS------------\

import { useState } from "react";
import classes from "./_ConfigPop.module.scss";
import arrowIcon from "./arrow.svg";
import checkIcon from "./check.svg";

//---------COMPONENT----------\
const ConfigPop = function () {
  const [selectionState, setSelectionState] = useState(true);
  const [tempSelectionState, setTempSelectionState] = useState(false);

  const Logic = {
    evaluateStyleSelection() {
      return selectionState
        ? ` ${classes.tickbox} ${classes.selected}`
        : `${classes.tickbox} ${classes.unselected}`;
    },
    evaluateCheckIcon() {
      return selectionState ? (
        <img
          className={classes.icon}
          src={checkIcon}
          alt="checkIconTaskAutomation"
        />
      ) : (
        <></>
      );
    },
  };

  return (
    <>
      <div className={classes.body}>
        <div className={classes.header}>Settings</div>
        <div className={classes.settings}>
          <div className={classes.detail}>
            Delete Task when Status is "<span>Done!</span>"?
          </div>
          <img className={classes.arrow} src={arrowIcon} alt="arrowToField" />
          <div className={Logic.evaluateStyleSelection()}>
            {Logic.evaluateCheckIcon()}
          </div>
        </div>
        <div className={classes.confirm}>Save & Back</div>
      </div>
      <div className={classes.pointer}></div>
    </>
  );
};

//---------EXPORTS------------\
export default ConfigPop;
