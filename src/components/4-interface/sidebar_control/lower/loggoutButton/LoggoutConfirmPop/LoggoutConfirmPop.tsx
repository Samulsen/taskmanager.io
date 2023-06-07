//---------IMPORTS------------\

import InsideButtonLight from "../../../../../0-independent/buttons/inside/insideButtonLight/InsideButtonLight";
import classes from "./_LoggoutConfirmPop.module.scss";
import { AuthContext } from "../../../../../../context/AuthContext";
import { FC } from "react";

//---------COMPONENT----------\

const LoggoutConfirmPop: FC<{ setRequestState: any }> = function (props) {
  const loggout = AuthContext()!.loggout;

  const Logic = {
    refuseLogginRequest() {
      props.setRequestState(false);
    },
  };

  return (
    <>
      <div className={classes.body}>
        <div className={classes.message}>Do you really want to log out?</div>
        <InsideButtonLight
          key="buttonCancelLoggout"
          name="Cancel"
          background="neutral"
          clickMethod={Logic.refuseLogginRequest}
        />
        <InsideButtonLight
          key="buttonLoggoutLogout"
          name="Logout"
          background="reddish"
          clickMethod={loggout}
        />
      </div>
      <div className={classes.pointer}></div>
      <div className={classes.modal}></div>
    </>
  );
};

//---------EXPORTS------------\

export default LoggoutConfirmPop;
