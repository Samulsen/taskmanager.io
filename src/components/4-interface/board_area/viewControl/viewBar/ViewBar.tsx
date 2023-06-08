//---------IMPORTS------------\

import classes from "./_ViewBar.module.scss";
import SepBig from "./seperator/sepBig/SepBig";
import SepSmall from "./seperator/sepSmall/SepSmall";

//---------COMPONENT----------\

const ViewBar = function () {
  return (
    <div className={classes.body}>
      <SepBig />
      <SepSmall />
    </div>
  );
};

//---------EXPORTS------------\

export default ViewBar;
