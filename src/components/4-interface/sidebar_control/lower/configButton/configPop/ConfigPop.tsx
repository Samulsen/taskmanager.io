//---------IMPORTS------------\
import classes from "./_ConfigPop.module.scss";

//---------COMPONENT----------\
const ConfigPop = function () {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.header}>Settings</div>
        <div className={classes.settings}>
          <div className={classes.detail}>
            Delete Task when Status is <span>"Done!"</span>?
          </div>
          <div className={classes.arrow}></div>
          <div className={classes.tickbox}></div>
        </div>
        <div className={classes.confirm}>Save & Back</div>
      </div>
      <div className={classes.pointer}></div>
    </>
  );
};

//---------EXPORTS------------\
export default ConfigPop;
