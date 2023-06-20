//---------IMPORTS------------\

import { FC, useState, useEffect } from "react";
//__i-style__________
import classes from "./_ItemBase.module.scss";
//__i-helper_________
import { CompositItemData } from "../../../../types/types";
//__i-context________
import { ItemControlContext } from "../../../../context/ItemControlContext";
//__i-components_____
import Status from "./Status/Status";
import Priority from "./Priority/Priority";
import DueToDate from "./DueToDate/DueToDate";
import Task from "./Task/Task";
import Comment from "./Comment/Comment";
import BoardOrigin from "./BoardOrigin/BoardOrigin";
import Tickbox from "./Tickbox/Tickbox";

//----------PRE---------------\

interface props {
  base: string;
  data: CompositItemData;
}
export interface itemOrigin {
  board: string;
  id: string;
}

//---------COMPONENT----------\

const ItemBase: FC<props> = function ({ base, data }) {
  //__c-hooks________

  const { itemSelection } = ItemControlContext()!;
  const [selfSelection, setSelfSelection] = useState(false);

  //__c-logic________

  const Logic = {
    ItemOrigin: {
      board: data.board_origin,
      id: data.id,
    } as itemOrigin,

    UI: {
      Classes: {
        forMain() {
          return selfSelection
            ? `${classes.main} ${classes.selected}`
            : `${classes.main} ${classes.unselected}`;
        },
      },
      evaluateSelectionState() {
        const idSelectionArr: string[] = itemSelection.list.map(
          (itemOrigin) => {
            return itemOrigin.id;
          }
        );

        if (idSelectionArr.includes(data.id)) {
          setSelfSelection(true);
        } else {
          setSelfSelection(false);
        }
      },
      evaluateBase() {
        if (base === "total") {
          return <BoardOrigin boardID={data.board_origin} />;
        } else {
          return <></>;
        }
      },
    },
  };
  //__c-effects______

  useEffect(() => {
    Logic.UI.evaluateSelectionState();
  }, [itemSelection.list]);

  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.grouplineMid}></div>
      <div className={Logic.UI.Classes.forMain()}>
        <Tickbox
          itemOrigin={Logic.ItemOrigin}
          selfSelection={{ state: selfSelection, set: setSelfSelection }}
        />
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
