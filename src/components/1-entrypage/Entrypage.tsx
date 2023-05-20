//---------IMPORTS------------\

import classes from "./_Entrypage.module.scss";
import Logo from "../0-independent/1-logo/Logo";

//---------COMPONENT----------\

const Entrypage = function () {
  return (
    <div className={classes.main}>
      <div className={classes.upper}></div>
      <div className={classes.middle}>
        <div className={classes["middle--title"]}>taskmanager.io</div>
        <div className={classes["middle--subline"]}>
          Welcome, click somewhere to start!
        </div>
        <div className={classes["middle--logo"]}>
          <Logo></Logo>
        </div>
      </div>
      <div className={classes.lower}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default Entrypage;
