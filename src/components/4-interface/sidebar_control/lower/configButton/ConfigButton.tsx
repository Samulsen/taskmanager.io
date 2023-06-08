//---------IMPORTS------------\

import classes from "./_ConfigButton.module.scss";
import icon from "./cfgicon.svg";
import ConfigPop from "./configPop/ConfigPop";
import { useState } from "react";

//---------COMPONENT----------\

const ConfigButton = function () {
  return (
    <div className={classes.body}>
      <img className={classes.icon} src={icon} alt="configIconButton" />
      <ConfigPop />
    </div>
  );
};

//---------EXPORTS------------\

export default ConfigButton;
