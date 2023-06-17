//---------IMPORTS------------\

import { itemOrigin } from "../ItemBase";
import EditComment from "./EditComment/EditComment";
import classes from "./_Comment.module.scss";
import { FC, useState, MouseEvent } from "react";

//----------PRE---------------\

//__p-types_________

interface props {
  displayValue: string;
  itemOrigin: itemOrigin;
}

//---------COMPONENT----------\

const Comment: FC<props> = function ({ displayValue, itemOrigin }) {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      renderMode() {
        if (editMode) {
          return;
        }
      },
      Edit: {
        enable(event: MouseEvent<HTMLDivElement>) {
          if (event.target === event.currentTarget) {
            event.stopPropagation();
            setEditMode(true);
          }
        },
        render() {
          if (editMode) {
            return (
              <EditComment
                setEditMode={setEditMode}
                currentDisplayValue={displayValue}
                itemOrigin={itemOrigin}
              />
            );
          } else {
            return <></>;
          }
        },
      },
      Display: {
        render() {
          if (displayValue === "") {
            return (
              <div className={classes.empty} onClick={Logic.UI.Edit.enable}>
                write a comment
              </div>
            );
          } else {
            return (
              <div className={classes.display} onClick={Logic.UI.Edit.enable}>
                {Logic.UI.Display.fitText()}
              </div>
            );
          }
        },
        fitText() {
          if (displayValue.length > 42) {
            return displayValue.slice(0, 42) + "...";
          } else {
            return displayValue;
          }
        },
      },
    },
  };
  //__c-structure____
  return (
    <div className={classes.body}>
      {Logic.UI.Display.render()}
      {Logic.UI.Edit.render()}
    </div>
  );
};

//---------EXPORTS------------\
export default Comment;
