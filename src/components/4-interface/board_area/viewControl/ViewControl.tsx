//---------IMPORTS------------\

import Line from "../../../0-independent/line/Line";
import classes from "./_ViewControl.module.scss";

//---------COMPONENT----------\

const ViewControl = function () {
  return (
    <div className={classes.body}>
      <div className={classes.title}>
        <span>Board - </span>
        <span className={classes.dynamic}>First Project</span>
      </div>
      <div className={classes.viewbar}>
        <div className={classes.seperator}></div>
      </div>
      <Line />
    </div>
  );
};

//---------EXPORTS------------\

export default ViewControl;
