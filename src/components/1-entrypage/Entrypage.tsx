//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import TopArea from "./top-area/TopArea";
import MiddleArea from "./middle-area/MiddleArea";
import LowerArea from "./lower-area/LowerArea";

//---------COMPONENT----------\

const Entrypage = function () {
  return (
    <div className={classes.main}>
      <TopArea />
      <MiddleArea />
      <LowerArea />
    </div>
  );
};

//---------EXPORTS------------\

export default Entrypage;
