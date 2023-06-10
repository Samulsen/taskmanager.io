//---------IMPORTS------------\

import useClickOutside from "../../../../../hooks/useClickOutside";
import classes from "./_NewBoard.module.scss";
import AddNewBoard from "./addNewBoard/AddNewBoard";
import newBoardIcon from "./newBoard.svg";
import { useState } from "react";

//---------COMPONENT----------\

const NewBoard = function () {
  //__c-hooks________

  const [canAddBoardState, setAddBoardState] = useState(false);

  //__c-logic________

  const Logic = {
    enableAddRequests() {
      setAddBoardState(true);
    },
    UI: {
      evaluateAddBoard() {
        return canAddBoardState ? (
          <AddNewBoard setCanAddBoardstate={setAddBoardState} />
        ) : (
          "Add new Board"
        );
      },
    },
  };

  return (
    <div className={classes.body}>
      <img
        onClick={Logic.enableAddRequests}
        className={classes.icon}
        src={newBoardIcon}
        alt="newBoardBtton"
      />
      {Logic.UI.evaluateAddBoard()}
    </div>
  );
};

//---------EXPORTS------------\

export default NewBoard;
