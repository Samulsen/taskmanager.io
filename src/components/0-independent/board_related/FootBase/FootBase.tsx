//---------IMPORTS------------\

//__i-libraries______
import { FC, useRef, KeyboardEvent, useState } from "react";
import { RawItemFields } from "../../../../types/types";
import { serverTimestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
//__i-style__________
import classes from "./_FootBase.module.scss";
//__i-context________
import { AuthContext } from "../../../../context/AuthContext";
//__i-components_____
import FootColumns from "./FootColumns/FootColumns";

//---------COMPONENT----------\

const FootBase: FC<{ mode: string }> = function ({ mode }) {
  //__c-hooks________

  const { boardID } = useParams();
  const uid = AuthContext()?.userObject!.uid;
  const newItemInputRef = useRef<HTMLInputElement>(null);
  const [requestValidity, setRequestValidity] = useState(true);
  const [currentBoardSelection, setCurrentBoardSelection] =
    useState("Select Board");

  //__c-logic________

  const Logic = {
    Data: {
      Total: {
        createItem() {},
      },
      Dynamic: {
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
                priority: "",
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
              });
            }
          }
        },
      },
    },
    UI: {
      Dynamic: {
        evaluateSubmissionState() {
          return requestValidity
            ? { placeholder: "+ Add a Task" }
            : { placeholder: "cannot be empty!" };
        },
        render() {
          return (
            <>
              <input
                onKeyDown={Logic.Data.Dynamic.createItem}
                ref={newItemInputRef}
                className={classes.addTask}
                type="text"
                {...Logic.UI.Dynamic.evaluateSubmissionState()}
              />
              <FootColumns
                mode="dynamic"
                boardSelection={{
                  selection: currentBoardSelection,
                  setSelection: setCurrentBoardSelection,
                }}
              />
            </>
          );
        },
      },
      Total: {
        evaluateSubmissionState() {
          return requestValidity
            ? { placeholder: "+ Select Board and then add Task" }
            : { placeholder: "cannot be empty!" };
        },
        render() {
          return (
            <>
              <input
                onKeyDown={Logic.Data.Total.createItem}
                ref={newItemInputRef}
                className={classes.addTask}
                type="text"
                {...Logic.UI.Total.evaluateSubmissionState()}
              />
              <FootColumns
                mode="total"
                boardSelection={{
                  selection: currentBoardSelection,
                  setSelection: setCurrentBoardSelection,
                }}
              />
            </>
          );
        },
      },
      Mode: {
        evaluate() {
          if (mode === "total") {
            return Logic.UI.Total.render();
          } else {
            return Logic.UI.Dynamic.render();
          }
        },
      },
    },
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.grouplineLower}></div>
      <div className={classes.main}>
        <div className={classes.quad}></div>
        {Logic.UI.Mode.evaluate()}
      </div>
      <div className={classes.rest}></div>
    </div>
  );
};

//---------EXPORTS------------\
export default FootBase;
