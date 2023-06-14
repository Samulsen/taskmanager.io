//---------IMPORTS------------\

import { FC, useRef } from "react";
import classes from "./_FootBase.module.scss";
import { itemdata } from "../../../../types/types";
import { serverTimestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";

//---------COMPONENT----------\
const FootBase: FC<{ type: string }> = function ({ type }) {
  //__c-hooks________

  const newItemInputRef = useRef<HTMLInputElement>(null);
  const { boardID } = useParams();

  //__c-logic________
  const Logic = {
    Data: {
      createItem() {
        const nameValue = newItemInputRef.current!.value;
        const emptyData: itemdata = {
          type: "item",
          timestamp: serverTimestamp(),
          taskname: nameValue,
          board_origin: boardID,
          due_to_date: "none",
          status: "none",
          priority: 0,
          comment: "",
        };
      },
    },
    UI: {
      evaluateSubmissionValidity() {},
      evaluateType() {
        if (type === "total") {
          return (
            <div className={classes.forTotal}>
              Add task in specific board...
            </div>
          );
        } else {
          return (
            <input
              ref={newItemInputRef}
              className={classes.addTask}
              type="text"
              placeholder="+ Add a Task"
            />
          );
        }
      },
    },
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.grouplineLower}></div>
      <div className={classes.main}>
        <div className={classes.quad}></div>
        {Logic.UI.evaluateType()}
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default FootBase;
