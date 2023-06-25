//---------IMPORTS------------\

//__i-libraries______
import {
  FC,
  useState,
  FocusEvent,
  useRef,
  KeyboardEvent,
  useEffect,
} from "react";
//__i-style__________
import classes from "./_Task.module.scss";
//__i-context________
import { AuthContext } from "../../../../../context/AuthContext";
//__i-helper_________
import { itemOrigin } from "../ItemBase";
import { db } from "../../../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

//----------PRE---------------\

interface props {
  displayValue: string;
  itemOrigin: itemOrigin;
}

//---------COMPONENT----------\

const Task: FC<props> = function ({ displayValue, itemOrigin }) {
  //__c-hooks________

  const [requestValidity, setRequestValidity] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const uid = AuthContext()!.userObject!.uid;

  //__c-logic________

  const Logic = {
    Data: {
      updateName() {
        const editedDisplayValue = inputRef.current!.value;
        if (editedDisplayValue.trim().length === 0) {
          setRequestValidity(false);
        } else {
          const itemDocRef = doc(
            db,
            `MainUserDataPool_${uid}`,
            "UserBoards",
            itemOrigin.board,
            itemOrigin.id
          );
          const updatedData = {
            taskname: editedDisplayValue,
          };
          Logic.UI.unfocus();
          updateDoc(itemDocRef, updatedData);
        }
      },
      handleKeydown(event: KeyboardEvent) {
        if (event.target === event.currentTarget) {
          if (event.key === "Enter") {
            Logic.Data.updateName();
            return;
          }
        }
      },
      handleUnfocus(event: FocusEvent) {
        if (event.target === event.currentTarget) {
          Logic.Data.updateName();
          return;
        }
      },
    },
    UI: {
      unfocus() {
        inputRef.current!.blur();
      },
      evaluateSubmissionValidity() {
        return requestValidity
          ? { placeholder: "" }
          : { placeholder: "cannot be empty!" };
      },
      fitText() {
        // if (displayValue.length > 28) {
        //   updateDefaultValue(displayValue.slice(0, 28) + "...");
        // } else {
        //   updateDefaultValue(displayValue);
        // }
      },
    },
  };

  //__c-effects______

  useEffect(() => {
    Logic.UI.fitText();
  }, []);

  //__c-structure____

  return (
    <div className={classes.body}>
      <input
        ref={inputRef}
        type="text"
        defaultValue={displayValue}
        name="editTaskInput"
        onBlur={Logic.Data.handleUnfocus}
        onKeyDown={Logic.Data.handleKeydown}
        {...Logic.UI.evaluateSubmissionValidity()}
      />
    </div>
  );
};

//---------EXPORTS------------\

export default Task;
