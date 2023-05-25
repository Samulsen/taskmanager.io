//---------IMPORTS------------\

import classes from "./_main.module.scss";
import { Outlet } from "react-router-dom";

//---------COMPONENT----------\

const Main = function () {
  return <div className={classes.main}>{<Outlet />}</div>;
};

//---------EXPORTS------------\

export default Main;
