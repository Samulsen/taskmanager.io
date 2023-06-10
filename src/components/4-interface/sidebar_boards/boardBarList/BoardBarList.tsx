//---------IMPORTS------------\

import classes from "./_BoardBarList.module.scss";
import BoardItem from "./boardItem/BoardItem";
import { DataContext, appMetaData } from "../../../../context/DataContext";

//---------COMPONENT----------\

const BoardBarList = function () {
  const { boardNames: boardListArray } = DataContext()
    ?.appMetaData as appMetaData;

  const Logic = {
    UI: {
      renderList() {
        return boardListArray
          .filter(([boardId]) => boardId !== "initialField")
          .map(([boardId, currentBoardName]) => (
            <BoardItem
              key={boardId}
              boardId={boardId}
              currentBoardName={currentBoardName}
            />
          ));
      },
    },
  };

  return <div className={classes.body}>{Logic.UI.renderList()}</div>;
};

//---------EXPORTS------------\

export default BoardBarList;
