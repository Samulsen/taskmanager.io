//---------IMPORTS------------\

import classes from "./_NewBoard.module.scss";
import newBoard from "./newBoard.svg";

//---------COMPONENT----------\

const NewBoard = function () {
  return (
    <div className={classes.body}>
      <img className={classes.icon} src={newBoard} alt="newBoardBtton" />
      Add new Board
    </div>
  );
};

//---------EXPORTS------------\

export default NewBoard;
