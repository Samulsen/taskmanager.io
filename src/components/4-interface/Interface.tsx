//---------IMPORTS------------\

import classes from "./_Interface.module.scss";
import { Outlet } from "react-router-dom";

//---------COMPONENT----------\
const Interface = function () {
  //__c-hooks________

  return (
    <div className={classes.body}>
      <div className={classes.sidebar_controll}></div>
      <div className={classes.sidebar_boards}></div>
      <div className={classes.board_area}>
        <Outlet />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default Interface;
