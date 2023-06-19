//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import classes from "./_Interface.module.scss";
//__i-context________
import MetaDataContextProvider from "../../context/MetadataContext";
import BoardContextProvider from "../../context/BoardContext";
import ConfigContextProvider from "../../context/ConfigContext";
import BoardlistContextProvider from "../../context/BoardlistContext";
import ActiveDataContextProvider from "../../context/ActiveDataContext";
//__i-components_____
import BoardArea from "./board_area/BoardArea";
import SidebarBoards from "./sidebar_boards/SidebarBoards";
import SidebarControl from "./sidebar_control/SidebarControl";
import ItemControl from "./board_area/itemControl/ItemControl";

//---------COMPONENT----------\
const Interface = function () {
  return (
    <div className={classes.body}>
      {/* //__NOTE: Context for Sidebar Control comes from two ctxts but attacks only one component lower in the three */}
      <MetaDataContextProvider>
        <ConfigContextProvider>
          <SidebarControl />
        </ConfigContextProvider>
      </MetaDataContextProvider>
      <BoardContextProvider>
        <BoardlistContextProvider>
          <SidebarBoards />
          <ActiveDataContextProvider>
            <BoardArea>
              <Outlet />
            </BoardArea>
          </ActiveDataContextProvider>
        </BoardlistContextProvider>
      </BoardContextProvider>
    </div>
  );
};

//---------EXPORTS------------\

export default Interface;
