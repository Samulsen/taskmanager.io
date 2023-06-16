//---------IMPORTS------------\

import { FC, useRef, KeyboardEvent, useState } from "react";
import { RawItemFields } from "../../../../types/types";
import { serverTimestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import classes from "./_FootBase.module.scss";
//__i-context________
import { AuthContext } from "../../../../context/AuthContext";

//---------COMPONENT----------\
const FootBase: FC<{ type: string }> = function ({ type }) {
  //__c-hooks________

  const newItemInputRef = useRef<HTMLInputElement>(null);
  const { boardID } = useParams();
  const uid = AuthContext()?.userObject!.uid;
  const [requestValidity, setRequestValidity] = useState(true);

  //__c-logic________

  const Logic = {
    Data: {
      createItem(event: KeyboardEvent) {
        if (event.key === "Enter") {
          const nameValue = newItemInputRef.current!.value;
          if (nameValue.trim().length === 0) {
            setRequestValidity(false);
          } else {
            const baseData: RawItemFields = {
              type: "item",
              timestamp: serverTimestamp(),
              taskname: nameValue,
              board_origin: boardID as string,
              due_to_date: "none",
              status: "none",
              priority: 0,
              comment: "",
            };
            addDoc(
              collection(
                db,
                `MainUserDataPool_${uid}`,
                "UserBoards",
                `${boardID}`
              ),
              baseData
            ).then(() => {
              setRequestValidity(true);
              newItemInputRef.current!.value = "";
              newItemInputRef.current!.blur();
            });
          }
        }
      },
    },
    UI: {
      evaluateSubmissionValidity() {
        return requestValidity
          ? { placeholder: "+ Add a Task" }
          : { placeholder: "cannot be empty!" };
      },
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
              onKeyDown={Logic.Data.createItem}
              ref={newItemInputRef}
              className={classes.addTask}
              type="text"
              {...Logic.UI.evaluateSubmissionValidity()}
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
