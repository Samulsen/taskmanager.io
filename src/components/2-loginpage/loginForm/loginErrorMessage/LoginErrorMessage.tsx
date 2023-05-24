//---------IMPORTS------------\

import classes from "./_LoginErrorMessage.module.scss";

//---------COMPONENT----------\

const LoginErrorMessage = function () {
  return (
    <div className={classes.body}>
      <div className={classes.line}></div>
      <div className={classes.message}>
        <span className={classes.errorPart}>Error</span>
        <span>: Invalid Credentials!</span>
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default LoginErrorMessage;
