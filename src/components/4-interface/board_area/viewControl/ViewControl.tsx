//---------IMPORTS------------\

import Line from "../../../0-independent/line/Line";
import classes from "./_ViewControl.module.scss";
import ViewBar from "./viewBar/ViewBar";
import ViewTitle from "./viewTitle/ViewTitle";

//---------COMPONENT----------\

const ViewControl = function () {
  return (
    <div className={classes.body}>
      <ViewTitle />
      <ViewBar />
      <Line />
    </div>
  );
};

//---------EXPORTS------------\

export default ViewControl;
