//---------IMPORTS------------\

import classes from "./_BoardBarMenu.module.scss";
import { Link } from "react-router-dom";

//---------COMPONENT----------\

const BoardBarMenu = function () {
  return (
    <div className={classes.body}>
      <div className={classes.title}></div>
      <Link className={classes.linkTotal} to={""}>
        See all tasks
      </Link>
      <div className={classes.newBoard}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default BoardBarMenu;
