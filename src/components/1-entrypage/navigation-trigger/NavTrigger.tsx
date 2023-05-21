//---------IMPORTS------------\

import { Link } from "react-router-dom";
import classes from "./_NavTrigger.module.scss";

//---------COMPONENT----------\

const NavTrigger = function () {
  return <Link to="../login" className={classes.navTrigger}></Link>;
};

//---------EXPORTS------------\

export default NavTrigger;
