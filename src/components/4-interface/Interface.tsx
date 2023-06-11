//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import classes from "./_Interface.module.scss";
//__i-context________
import MetaDataContextProvider from "../../context/MetadataContext";
import BoardContextProvider from "../../context/BoardContext";
import ConfigContextProvider from "../../context/ConfigContext";
import WorkspaceContextProvider from "../../context/WorkspaceContext";
//__i-components_____
import BoardArea from "./board_area/BoardArea";
import SidebarBoards from "./sidebar_boards/SidebarBoards";
import SidebarControl from "./sidebar_control/SidebarControl";

//---------COMPONENT----------\
const Interface = function () {
  return (
    <div className={classes.body}>
      <MetaDataContextProvider>
        <ConfigContextProvider>
          <SidebarControl />
        </ConfigContextProvider>
      </MetaDataContextProvider>
      <BoardContextProvider>
        <WorkspaceContextProvider>
          <SidebarBoards />
        </WorkspaceContextProvider>
        <BoardArea>
          <Outlet />
        </BoardArea>
      </BoardContextProvider>
    </div>
  );
};

//---------EXPORTS------------\

export default Interface;
