//---------IMPORTS------------\

import classes from "./_ConfigPop.module.scss";
import arrowIcon from "./arrow.svg";
import checkIcon from "./check.svg";

//---------COMPONENT----------\
const ConfigPop = function () {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.header}>Settings</div>
        <div className={classes.settings}>
          <div className={classes.detail}>
            Delete Task when Status is "<span>Done!</span>"?
          </div>
          <img className={classes.arrow} src={arrowIcon} alt="arrowToField" />
          <div className={classes.tickbox}>
            <img
              className={classes.icon}
              src={checkIcon}
              alt="checkIconTaskAutomation"
            />
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
