//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import TopArea from "./sub-components/1-level/top-area/TopArea";
import MiddleArea from "./sub-components/1-level/middle-area/MiddleArea";
import LowerArea from "./sub-components/1-level/lower-area/LowerArea";

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
