//---------IMPORTS------------\

import classes from "./_LoggoutButton.module.scss";
import icon from "./loggoutIcon.svg";

//---------COMPONENT----------\

const LoggoutButton = function () {
  return (
    <div className={classes.body}>
      <img src={icon} alt="loggoutButtonIcon" />
    </div>
  );
};

//---------EXPORTS------------\

export default LoggoutButton;
