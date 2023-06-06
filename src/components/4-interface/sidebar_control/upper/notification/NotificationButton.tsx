//---------IMPORTS------------\

import classes from "./_NotificationButton.module.scss";
import bellOff from "./bellOff.svg";

//---------COMPONENT----------\

const NotificationButton = function () {
  return (
    <div className={classes.body}>
      <img src={bellOff} alt="bellOffIcon" />
    </div>
  );
};

//---------EXPORTS------------\

export default NotificationButton;
