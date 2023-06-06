//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import classes from "./_Interface.module.scss";
//__i-components_____
import BoardArea from "./board_area/BoardArea";
import SidebarBoards from "./sidebar_boards/SidebarBoards";
import SidebarControl from "./sidebar_control/SidebarControl";

//---------COMPONENT----------\
const Interface = function () {
  //__c-hooks________

  return (
    <div className={classes.body}>
      <SidebarControl />
      <SidebarBoards />
      <BoardArea>
        <Outlet />
      </BoardArea>
    </div>
  );
};

//---------EXPORTS------------\

export default Interface;
