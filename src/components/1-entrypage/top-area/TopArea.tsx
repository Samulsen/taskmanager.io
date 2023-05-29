//---------IMPORTS------------\

import classes from "./_TopArea.module.scss";
import Rectangle from "./rectangle/Rectangle";

//---------COMPONENT----------\

const TopArea = function () {
  return (
    <div className={classes.topArea}>
      <Rectangle key={"rec-1"} position={classes.first} />
      <Rectangle key={"rec-2"} position={classes.second} />
      <Rectangle key={"rec-3"} position={classes.third} />
    </div>
  );
};

//---------EXPORTS------------\

export default TopArea;
