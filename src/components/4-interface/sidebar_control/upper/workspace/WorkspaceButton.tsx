//---------IMPORTS------------\

import classes from "./_WorkspaceButton.module.scss";
import BoardIcon from "./board.svg";

//---------COMPONENT----------\

const WorkspaceButton = function () {
  return (
    <div className={classes.body}>
      <img src={BoardIcon} alt="boardModeButtonIcon" />
    </div>
  );
};

//---------EXPORTS------------\

export default WorkspaceButton;
