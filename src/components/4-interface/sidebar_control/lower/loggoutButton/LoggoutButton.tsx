//---------IMPORTS------------\

import { useState } from "react";
import classes from "./_LoggoutButton.module.scss";

import { AuthContext } from "../../../../../context/AuthContext";
import icon from "./loggoutIcon.svg";
import LoggoutConfirmPop from "./LoggoutConfirmPop/LoggoutConfirmPop";

//---------COMPONENT----------\

const LoggoutButton = function () {
  const [requestState, setRequestState] = useState(false);

  const Logic = {
    enableConfirmButton() {
      setRequestState(true);
    },
  };

  return (
    <div className={classes.body}>
      <img
        tabIndex={0}
        className={classes.icon}
        src={icon}
        alt="loggoutButtonIcon"
        onClick={Logic.enableConfirmButton}
      />
      {requestState ? (
        <LoggoutConfirmPop setRequestState={setRequestState} />
      ) : (
        <></>
      )}
    </div>
  );
};

//---------EXPORTS------------\

export default LoggoutButton;
