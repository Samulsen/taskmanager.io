//---------IMPORTS------------\

import classes from "./_LinkTotal.module.scss";
import { Link } from "react-router-dom";
import allTasks from "./allTasks.svg";

//---------COMPONENT----------\

const LinkTotal = function () {
  return (
    <div className={classes.body}>
      <Link className={classes.body} to={""}>
        <img className={classes.icon} src={allTasks} alt="allTaskBtton" />
        See all tasks
      </Link>
    </div>
  );
};

//---------EXPORTS------------\

export default LinkTotal;
