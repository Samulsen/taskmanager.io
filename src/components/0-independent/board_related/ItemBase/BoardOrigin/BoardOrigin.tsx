//---------IMPORTS------------\

import classes from "./_BoardOrigin.module.scss";
import { FC } from "react";
import { BoardlistContext } from "../../../../../context/BoardlistContext";
import { Link } from "react-router-dom";

//---------COMPONENT----------\

const BoardOrigin: FC<{ boardID: string | undefined }> = function ({
  boardID,
}) {
  //__c-hooks________

  const { boardNames } = BoardlistContext()!;

  //__c-logic________

  const Logic = {
    UI: {
      searchBoardNameInBoardlist() {
        let boardName = "";
        for (const board of boardNames) {
          if (board[0] === boardID) {
            boardName = board[1].name;
            break;
          }
        }
        // return boardName;
        return <Link to={`../${boardID}`}> {boardName}</Link>;
      },
    },
  };

  //__c-structure____

  return (
    <div className={classes.body}>
      <div className={classes.display}>
        {Logic.UI.searchBoardNameInBoardlist()}
      </div>
    </div>
  );
};

//---------EXPORTS------------\
export default BoardOrigin;
