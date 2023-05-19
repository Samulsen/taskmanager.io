//---------IMPORTS------------\

import classes from "./_logo.module.scss";
import logo from "./logo.svg";

//---------COMPONENT----------\

const Logo = function () {
  return (
    <div className={classes.logo}>
      <div className={classes.blob}></div>
      <img className={classes.form} src={logo} alt="logoMain" />
    </div>
  );
};

//---------EXPORTS------------\

export default Logo;
