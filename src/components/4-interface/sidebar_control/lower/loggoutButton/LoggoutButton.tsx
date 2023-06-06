//---------IMPORTS------------\

import { AuthContext } from "../../../../../context/AuthContext";
import classes from "./_LoggoutButton.module.scss";
import icon from "./loggoutIcon.svg";

//---------COMPONENT----------\

const LoggoutButton = function () {
  const loggout = AuthContext()!.loggout;

  return (
    <div className={classes.body}>
      <img src={icon} alt="loggoutButtonIcon" onClick={loggout} />
    </div>
  );
};

//---------EXPORTS------------\

export default LoggoutButton;
