//---------IMPORTS------------\

import { FC } from "react";
import classes from "./_ItemBase.module.scss";

//__i-components_____

import Status from "./Status/Status";
import Priority from "./Priority/Priority";
import DueToDate from "./DueToDate/DueToDate";
import Task from "./Task/Task";
import Comment from "./Comment/Comment";
import BoardOrigin from "./BoardOrigin/BoardOrigin";

//---------COMPONENT----------\

const ItemBase: FC<{ type: string }> = function ({ type }) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {
      evaluateType() {
        if (type === "total") {
          return <BoardOrigin />;
        } else {
          return <></>;
        }
      },
    },
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.grouplineMid}></div>
      <div className={classes.main}>
        <div className={classes.marker}>
          <div className={classes.box}></div>
        </div>
        <Task />
        {Logic.UI.evaluateType()}
        <DueToDate />
        <Status />
        <Priority />
        <Comment />
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default ItemBase;
