//---------IMPORTS------------\

import classes from "./_SidebarBoards.module.scss";
import Line from "../../0-independent/line/Line";

//---------COMPONENT----------\

const SidebarBoards = function () {
  return (
    <div className={classes.body}>
      <div className={classes.menu}></div>
      <div className={classes.list}></div>
      <Line />
    </div>
  );
};

//---------EXPORTS------------\

export default SidebarBoards;
