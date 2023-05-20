//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import MiddleArea from "./sub-components/1-level/middle-area/MiddleArea";

//---------COMPONENT----------\

const Entrypage = function () {
  return (
    <div className={classes.main}>
      <div className={classes.upper}></div>
      <MiddleArea></MiddleArea>
      <div className={classes.lower}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default Entrypage;
