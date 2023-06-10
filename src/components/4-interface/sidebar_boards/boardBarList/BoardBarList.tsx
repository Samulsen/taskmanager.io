//---------IMPORTS------------\

import classes from "./_BoardBarList.module.scss";
import BoardItem from "./boardItem/BoardItem";
import { DataContext, appMetaData } from "../../../../context/DataContext";

//---------COMPONENT----------\

const BoardBarList = function () {
  const { boardNames: boardListArray } = DataContext()
    ?.appMetaData as appMetaData;

  return (
    <div className={classes.body}>
      <BoardItem data="First Board_2893928" />
      <BoardItem data="Second Board_292883" />
    </div>
  );
};

//---------EXPORTS------------\

export default BoardBarList;
