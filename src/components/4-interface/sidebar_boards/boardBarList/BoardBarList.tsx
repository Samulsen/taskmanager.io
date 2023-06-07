//---------IMPORTS------------\

import classes from "./_BoardBarList.module.scss";
import BoardItem from "./boardItem/BoardItem";

//---------COMPONENT----------\

const BoardBarList = function () {
  return (
    <div className={classes.body}>
      <BoardItem data="First Board_2893928" />
      <BoardItem data="Second Board_292883" />
    </div>
  );
};

//---------EXPORTS------------\

export default BoardBarList;
