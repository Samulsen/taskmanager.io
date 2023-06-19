//---------IMPORTS------------\

import { FC } from "react";
//__i-style__________
import classes from "./_ItemBase.module.scss";
//__i-helper_________
import { CompositItemData } from "../../../../types/types";
//__i-components_____
import Status from "./Status/Status";
import Priority from "./Priority/Priority";
import DueToDate from "./DueToDate/DueToDate";
import Task from "./Task/Task";
import Comment from "./Comment/Comment";
import BoardOrigin from "./BoardOrigin/BoardOrigin";
import Tickbox from "./Tickbox/Tickbox";

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
        <Tickbox itemOrigin={Logic.ItemOrigin} />
        <Task displayValue={data.taskname} itemOrigin={Logic.ItemOrigin} />
        {Logic.UI.evaluateBase()}
        <DueToDate
          dateString={data.due_to_date}
          itemOrigin={Logic.ItemOrigin}
        />
        <Status displayValue={data.status} itemOrigin={Logic.ItemOrigin} />
        <Priority displayValue={data.priority} itemOrigin={Logic.ItemOrigin} />
        <Comment displayValue={data.comment} itemOrigin={Logic.ItemOrigin} />
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default ItemBase;
