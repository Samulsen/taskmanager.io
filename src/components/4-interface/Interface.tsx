//---------IMPORTS------------\

import classes from "./_Interface.module.scss";
import { Outlet } from "react-router-dom";

//---------COMPONENT----------\
const Interface = function () {
  //__c-hooks________

  return (
    <div className={classes.body}>
      <Outlet />
    </div>
  );
};

//---------EXPORTS------------\

export default Interface;
