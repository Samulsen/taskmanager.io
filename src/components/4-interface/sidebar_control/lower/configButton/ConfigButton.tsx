//---------IMPORTS------------\

import classes from "./_ConfigButton.module.scss";
import icon from "./cfgicon.svg";

//---------COMPONENT----------\

const ConfigButton = function () {
  return (
    <div className={classes.body}>
      <img src={icon} alt="configIconButton" />
    </div>
  );
};

//---------EXPORTS------------\

export default ConfigButton;
