//---------IMPORTS------------\

import InsideButtonLight from "../../../../../0-independent/buttons/inside/insideButtonLight/InsideButtonLight";
import classes from "./_LoggoutConfirmPop.module.scss";

//---------COMPONENT----------\

const LoggoutConfirmPop = function () {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.message}>Do you want to log out?</div>
        <InsideButtonLight
          key="buttonCancelLoggout"
          name="Cancel"
          background="neutral"
          clickMethod={() => ""}
        />
        <InsideButtonLight
          key="buttonLoggoutLogout"
          name="Logout"
          background="reddish"
          clickMethod={() => ""}
        />
      </div>
      <div className={classes.pointer}></div>
    </>
  );
};

//---------EXPORTS------------\

export default LoggoutConfirmPop;
