//---------IMPORTS------------\

import classes from "./_ConfigButton.module.scss";
import icon from "./cfgicon.svg";
import ConfigPop from "./configPop/ConfigPop";
import { useState } from "react";

//---------COMPONENT----------\

const ConfigButton = function () {
  const [configPopState, setConfigPop] = useState(false);

  const Logic = {
    enableConfigPop() {
      setConfigPop(true);
    },

    evaluateConfigPop() {
      return configPopState ? (
        <ConfigPop setConfigPopState={setConfigPop} />
      ) : (
        <></>
      );
    },
  };

  return (
    <div className={classes.body} onClick={Logic.enableConfigPop}>
      <img className={classes.icon} src={icon} alt="configIconButton" />
      {Logic.evaluateConfigPop()}
    </div>
  );
};

//---------EXPORTS------------\

export default ConfigButton;
