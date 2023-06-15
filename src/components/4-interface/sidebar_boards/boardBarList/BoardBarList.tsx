//---------IMPORTS------------\

import classes from "./_BoardBarList.module.scss";
import BoardItem from "./boardItem/BoardItem";
import { BoardlistContext } from "../../../../context/BoardlistContext";

//---------COMPONENT----------\

const BoardBarList = function () {
  const { state, boardNames } = BoardlistContext();

  const Logic = {
    evaluateRenderState() {
      if (state === "cold") {
        return <></>;
      } else {
        return this.UI.renderList();
      }
    },
    UI: {
      renderList() {
        return boardNames
          .sort((a, b) => a[1].timestamp.seconds - b[1].timestamp.seconds)
          .map(([boardId, { name }]) => (
            <BoardItem
              key={boardId}
              boardId={boardId}
              currentBoardName={name}
            />
          ));
      },
    },
  };

  return <div className={classes.body}>{Logic.evaluateRenderState()}</div>;
};

//---------EXPORTS------------\

export default BoardBarList;
