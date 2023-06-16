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
import { CompositItemData } from "../../../../types/types";

//----------PRE---------------\

export interface itemOrigin {
  board: string;
  id: string;
}

//---------COMPONENT----------\

const ItemBase: FC<{ base: string; data: CompositItemData }> = function ({
  base,
  data,
}) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    ItemOrigin: {
      board: data.board_origin,
      id: data.id,
    } as itemOrigin,

    UI: {
      evaluateBase() {
        if (base === "total") {
          return <BoardOrigin boardID={data.board_origin} />;
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
        <Task displayValue={data.taskname} itemOrigin={Logic.ItemOrigin} />
        {Logic.UI.evaluateBase()}
        <DueToDate
          dateString={data.due_to_date}
          itemOrigin={Logic.ItemOrigin}
        />
        <Status displayValue={data.status} />
        <Priority displayValue={data.priority} />
        <Comment displayValue={data.comment} />
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default ItemBase;
