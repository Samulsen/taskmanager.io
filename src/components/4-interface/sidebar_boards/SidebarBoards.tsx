//---------IMPORTS------------\

import classes from "./_SidebarBoards.module.scss";
import Line from "../../0-independent/line/Line";
import BoardBarMenu from "./boardBarMenu/BoardBarMenu";
import BoardBarList from "./boardBarList/BoardBarList";

//---------COMPONENT----------\

const SidebarBoards = function () {
  return (
    <div className={classes.body}>
      <BoardBarMenu />
      <BoardBarList />
      <Line />
    </div>
  );
};

//---------EXPORTS------------\

export default SidebarBoards;
