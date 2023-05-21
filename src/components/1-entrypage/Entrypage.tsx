//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import { useState } from "react";
//__i-components_____
import NavTrigger from "./navigation-trigger/NavTrigger";
import TopArea from "./top-area/TopArea";
import MiddleArea from "./middle-area/MiddleArea";
import LowerArea from "./lower-area/LowerArea";

//---------COMPONENT----------\

const Entrypage = function () {
  const [canTrigger, setTrigger] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.anchor}>
        {canTrigger ? <NavTrigger /> : null}
        <TopArea />
        <MiddleArea />
        <LowerArea />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default Entrypage;
