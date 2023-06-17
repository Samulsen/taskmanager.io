//---------IMPORTS------------\

import classes from "./_EditComment.module.scss";
import {
  FC,
  useRef,
  Dispatch,
  SetStateAction,
  useEffect,
  KeyboardEvent,
  useLayoutEffect,
} from "react";
import { itemOrigin } from "../../ItemBase";
import { AuthContext } from "../../../../../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../../firebase";

//----------PRE---------------\

//__p-types_________

interface props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  itemOrigin: itemOrigin;
  currentDisplayValue: string;
}

//---------COMPONENT----------\

const EditComment: FC<props> = function ({
  setEditMode,
  itemOrigin,
  currentDisplayValue,
}) {
  //__c-hooks________

  const uid = AuthContext()!.userObject!.uid;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  //__c-logic________

  const Logic = {
    UI: {
      abortChanges(event: KeyboardEvent) {
        if ((event as any).target === (event as any).currentTarget) {
          if ((event as any).key === "Escape") {
            setEditMode(false);
          }
        }
      },
      bringCursorToEnd() {
        const length = currentDisplayValue.length;
        const element = textareaRef.current!;
        element.focus();
        element.setSelectionRange(length, length);
        element.scrollTop = element.scrollHeight;
      },
    },
    Data: {
      postChanges() {
        const itemDocRef = doc(
          db,
          `MainUserDataPool_${uid}`,
          "UserBoards",
          itemOrigin.board,
          itemOrigin.id
        );
        const updatedData = {
          comment: textareaRef.current!.value,
        };
        updateDoc(itemDocRef, updatedData);
        setEditMode(false);
      },
    },
  };

  //__c-effects______

  useLayoutEffect(() => {
    Logic.UI.bringCursorToEnd.bind(Logic)();
  }, []);

  useEffect(() => {
    const evaluateClick = function (event: Event) {
      const element = bodyRef.current as any;
      if (!element.contains(event.target)) {
        Logic.Data.postChanges();
      }
    };

    document.addEventListener("mousedown", evaluateClick);

    return () => {
      document.removeEventListener("mousedown", evaluateClick);
    };
  }, []);

  //__c-structure____

  return (
    <div className={classes.body} ref={bodyRef}>
      <div className={classes.pointer}></div>
      <textarea
        spellCheck="false"
        name={"txtarea " + itemOrigin.id}
        ref={textareaRef}
        onKeyDown={Logic.UI.abortChanges}
        defaultValue={currentDisplayValue}
      ></textarea>
    </div>
  );
};

//---------EXPORTS------------\
export default EditComment;
