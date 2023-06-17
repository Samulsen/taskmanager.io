//---------IMPORTS------------\

import classes from "./_EditComment.module.scss";
import { FC, useRef, Dispatch, SetStateAction, useEffect } from "react";
import { itemOrigin } from "../../ItemBase";
import { AuthContext } from "../../../../../../context/AuthContext";

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
    UI: {},
    Data: {},
  };

  //__c-effects______

  useEffect(() => {
    const evaluateClick = function (event: Event) {
      const element = bodyRef.current as any;
      if (!element.contains(event.target)) {
        setEditMode(false);
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
      <textarea name={"txtarea " + itemOrigin.id} ref={textareaRef}>
        {currentDisplayValue}
      </textarea>
    </div>
  );
};

//---------EXPORTS------------\
export default EditComment;
