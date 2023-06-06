//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import classes from "./_Interface.module.scss";
//__i-components_____
import { DataContext, appMetaData } from "../../context/DataContext";
import BoardArea from "./board_area/BoardArea";
import SidebarBoards from "./sidebar_boards/SidebarBoards";
import SidebarControl from "./sidebar_control/SidebarControl";
import Anchor from "../0-independent/anchor/Anchor";
import Loading from "../0-auth/loader/Loading";

//---------COMPONENT----------\
const Interface = function () {
  //__c-hooks________

  const userMetaData = DataContext()!.appMetaData;

  const Logic = {
    evaluateConnectionMainDataPool() {
      if (userMetaData === "cold") {
        return (
          <Anchor>
            <Loading />
          </Anchor>
        );
      }
      if (typeof (userMetaData as appMetaData).firstName === "string") {
        return (
          <div className={classes.body}>
            <SidebarControl />
            <SidebarBoards />
            <BoardArea>
              <Outlet />
            </BoardArea>
          </div>
        );
      }
    },
  };

  return <>{Logic.evaluateConnectionMainDataPool()}</>;
};

//---------EXPORTS------------\

export default Interface;
