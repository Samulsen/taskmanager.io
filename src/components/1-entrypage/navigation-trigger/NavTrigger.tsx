//---------IMPORTS------------\

import classes from "./_NavTrigger.module.scss";

//---------MAIN---------------\

const navigateToHome = function () {
  console.log("I was clicked!");
};

//---------COMPONENT----------\

const NavTrigger = function () {
  return <div className={classes.navTrigger} onClick={navigateToHome}></div>;
};

//---------EXPORTS------------\

export default NavTrigger;
