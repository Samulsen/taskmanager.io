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
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
//__i-style__________
import classes from "./_Task.module.scss";
//__i-context________
import { AuthContext } from "../../../../../context/AuthContext";
//__i-helper_________
import { itemOrigin } from "../ItemBase";

//----------PRE---------------\

interface props {
  displayValue: string;
  itemOrigin: itemOrigin;
}

//---------COMPONENT----------\

const Task: FC<props> = function ({ displayValue, itemOrigin }) {
  //__c-hooks________

  const [defaultValue, updateDefaultValue] = useState("");
  const [requestValidity, setRequestValidity] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const uid = AuthContext()!.userObject!.uid;

  //__c-logic________

  const Logic = {
    Data: {
      checkRequest() {
        const editedDisplayValue = inputRef.current!.value;
        if (editedDisplayValue.trim().length === 0) {
          setRequestValidity(false);
          return false;
        } else {
          return true;
        }
      },
      updateName(): Promise<void> {
        const editedDisplayValue = inputRef.current!.value;
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
        return updateDoc(itemDocRef, updatedData);
      },
      handleKeydown(event: KeyboardEvent) {
        if (event.target === event.currentTarget) {
          if (event.key === "Enter") {
            if (this.checkRequest()) {
              Logic.Data.updateName().then(Logic.UI.fitText);
            }
          }
        }
      },
      handleUnfocus(event: FocusEvent) {
        if (event.target === event.currentTarget) {
          if (this.checkRequest()) {
            Logic.Data.updateName().then(Logic.UI.fitText);
          }
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
      showAllText() {
        updateDefaultValue(displayValue);
      },
      fitText() {
        if (displayValue.length > 28) {
          updateDefaultValue(displayValue.slice(0, 28) + "...");
        } else {
          updateDefaultValue(displayValue);
        }
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
        defaultValue={defaultValue}
        name="editTaskInput"
        onFocus={Logic.UI.showAllText}
        onBlur={Logic.Data.handleUnfocus.bind(Logic.Data)}
        onKeyDown={Logic.Data.handleKeydown.bind(Logic.Data)}
        {...Logic.UI.evaluateSubmissionValidity()}
      />
    </div>
  );
};

//---------EXPORTS------------\

export default Task;
