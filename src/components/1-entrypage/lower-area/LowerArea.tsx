//---------IMPORTS------------\

import classes from "./_LowerArea.module.scss";
import Cirlce from "./circle/Cirlce";

//---------COMPONENT----------\

const LowerArea = function () {
  return (
    <div className={classes.lowerArea}>
      <Cirlce key="cir-1" position={classes.first} />
      <Cirlce key="cir-2" position={classes.second} />
      <Cirlce key="cir-3" position={classes.third} />
      <Cirlce key="cir-4" position={classes.fourth} />
    </div>
  );
};

//---------EXPORTS------------\

export default LowerArea;
