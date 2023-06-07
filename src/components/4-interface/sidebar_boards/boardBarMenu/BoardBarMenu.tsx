//---------IMPORTS------------\

import classes from "./_BoardBarMenu.module.scss";
import { Link } from "react-router-dom";
import Line from "../../../0-independent/line/Line";
import iconAllTasks from "./allTasks.svg";
import iconNewBoard from "./newBoard.svg";

//---------COMPONENT----------\

const BoardBarMenu = function () {
  return (
    <div className={classes.body}>
      <div className={classes.title}>Workspace</div>
      <Link className={classes.linkTotal} to={""}>
        <img className={classes.icon} src={iconAllTasks} alt="allTaskBtton" />
        See all tasks
      </Link>
      <div className={classes.newBoard}>
        <img className={classes.icon} src={iconNewBoard} alt="newBoardBtton" />
        Add new Board
      </div>
      <Line />
    </div>
  );
};

//---------EXPORTS------------\

export default BoardBarMenu;
