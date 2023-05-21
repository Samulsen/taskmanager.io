//---------IMPORTS------------\

import classes from "./_MiddleArea.module.scss";
import Logo from "../../0-independent/1-logo/Logo";

//---------COMPONENT----------\

const MiddleArea = function () {
  return (
    <div className={classes.middle}>
      <div className={classes.title}>taskmanager.io</div>
      <div className={classes.subline}>Welcome, click somewhere to start!</div>
      <div className={classes.logo}>
        <Logo></Logo>
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default MiddleArea;
