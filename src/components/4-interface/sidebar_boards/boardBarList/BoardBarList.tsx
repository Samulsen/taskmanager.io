//---------IMPORTS------------\

import classes from "./_BoardBarList.module.scss";
import BoardItem from "./boardItem/BoardItem";
import { DataContext, appMetaData } from "../../../../context/DataContext";

//---------COMPONENT----------\

const BoardBarList = function () {
  // const { boardNames: boardListArray } = DataContext()
  //   ?.appMetaData as appMetaData;

  // const Logic = {
  //   UI: {
  //     renderList() {
  //       return boardListArray
  //         .filter(([boardId]) => boardId !== "initialField")
  //         .sort((a, b) => b[1].timestamp.seconds - a[1].timestamp.seconds)
  //         .map(([boardId, { name }]) => (
  //           <BoardItem
  //             key={boardId}
  //             boardId={boardId}
  //             currentBoardName={name}
  //           />
  //         ));
  //     },
  //   },
  // };

  // return <div className={classes.body}>{Logic.UI.renderList()}</div>;
  return <div className="div"></div>;
};

//---------EXPORTS------------\

export default BoardBarList;
