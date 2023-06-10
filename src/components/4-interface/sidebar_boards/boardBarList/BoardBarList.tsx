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
        try {
          return boardListArray
            .filter(([boardId]) => boardId !== "initialField")
            .sort(
              (a, b) =>
                (b[1]?.timestamp.seconds ?? 1) - (a[1]?.timestamp.seconds ?? 0)
            )
            .map(([boardId, { name }]) => (
              <BoardItem
                key={boardId}
                boardId={boardId}
                currentBoardName={name}
              />
            ));
        } catch {}
      },
    },
  };

  return <div className={classes.body}>{Logic.UI.renderList()}</div>;
};

//---------EXPORTS------------\

export default BoardBarList;
