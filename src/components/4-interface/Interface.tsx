//---------IMPORTS------------\

import classes from "./_Interface.module.scss";
import { Outlet } from "react-router-dom";
import BoardArea from "./board_area/BoardArea";

//---------COMPONENT----------\
const Interface = function () {
  //__c-hooks________

  return (
    <div className={classes.body}>
      <div className={classes.sidebar_controll}></div>
      <div className={classes.sidebar_boards}></div>
      <BoardArea>
        <Outlet />
      </BoardArea>
    </div>
  );
};

//---------EXPORTS------------\

export default Interface;
