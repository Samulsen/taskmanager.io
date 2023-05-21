//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import { useState } from "react";
//__i-components_____
import NavTrigger from "./navigation-trigger/NavTrigger";
import TopArea from "./top-area/TopArea";
import MiddleArea from "./middle-area/MiddleArea";
import LowerArea from "./lower-area/LowerArea";
import { FunctionBody } from "typescript";

//---------COMPONENT----------\

const Entrypage = function () {
  const [canTrigger, setTrigger] = useState(false);
  setTimeout(() => {
    setTrigger(true);
  }, 6000);
  return (
    <div className={classes.main}>
      {canTrigger ? <NavTrigger /> : null}
      <div className={classes.anchor}>
        <TopArea />
        <MiddleArea />
        <LowerArea />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default Entrypage;
