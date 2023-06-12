//---------IMPORTS------------\

import classes from "./_LinkTotal.module.scss";
import { Link } from "react-router-dom";
import allTasks from "./allTasks.svg";
import { BoardContext } from "../../../../../context/BoardContext";

//---------COMPONENT----------\

const LinkTotal = function () {
  const {
    boardControl: { state, setState },
  } = BoardContext()!;

  const Logic = {
    UI: {
      setSelfSelection() {
        setState("total");
      },

      evaluateSelectionState() {
        if (state === "total") {
          return `${classes.body} ${classes.selected}`;
        } else {
          return `${classes.body} ${classes.unselected}`;
        }
      },
    },
  };

  return (
    <Link
      onClick={Logic.UI.setSelfSelection}
      className={Logic.UI.evaluateSelectionState()}
      to={"total"}
    >
      <img className={classes.icon} src={allTasks} alt="allTaskBtton" />
      See all tasks
    </Link>
  );
};

//---------EXPORTS------------\

export default LinkTotal;
