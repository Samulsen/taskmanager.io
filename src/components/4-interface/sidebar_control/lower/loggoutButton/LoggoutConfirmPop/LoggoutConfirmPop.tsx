//---------IMPORTS------------\

import classes from "./_LoggoutConfirmPop.module.scss";

//---------COMPONENT----------\

const LoggoutConfirmPop = function () {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.message}>Do you want to log out?</div>
      </div>
      <div className={classes.pointer}></div>
    </>
  );
};

//---------EXPORTS------------\

export default LoggoutConfirmPop;
