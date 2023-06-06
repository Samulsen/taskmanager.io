//---------IMPORTS------------\

import classes from "./_NotificationButton.module.scss";
import bellOff from "./bellOff.svg";

//---------COMPONENT----------\

const NotificationButton = function () {
  return (
    <div className={classes.body}>
      <div className={classes.message} data-description="coming soon..."></div>
      <img className={classes.icon} src={bellOff} alt="bellOffIcon" />
    </div>
  );
};

//---------EXPORTS------------\

export default NotificationButton;
