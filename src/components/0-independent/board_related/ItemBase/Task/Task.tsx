//---------IMPORTS------------\

import { itemOrigin } from "../ItemBase";
import EditTask from "./EditTask/EditTask";
import classes from "./_Task.module.scss";
import { FC, useState, MouseEvent } from "react";

//----------PRE---------------\

interface props {
  displayValue: string;
  itemOrigin: itemOrigin;
}

//---------COMPONENT----------\

const Task: FC<props> = function ({ displayValue, itemOrigin }) {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    Data: {},
    UI: {
      decideRenderMode() {
        return editMode ? this.Edit.render() : this.Display.render();
      },
      Edit: {
        enable(event: MouseEvent) {
          if (event.currentTarget === event.target) {
            event.stopPropagation();
            setEditMode(true);
          }
        },
        render() {
          return (
            <EditTask
              editMode={{ set: setEditMode }}
              displayValue={displayValue}
              itemOrigin={itemOrigin}
            />
          );
        },
        disable() {},
      },
      Display: {
        render() {
          let displaybleText = "";
          if (displayValue.length > 28) {
            displaybleText = displayValue.slice(0, 28) + "...";
          } else {
            displaybleText = displayValue;
          }
          return (
            <div className={classes.display} onClick={Logic.UI.Edit.enable}>
              {displaybleText}
            </div>
          );
        },
      },
    },
  };

  //__c-structure____

  return <div className={classes.body}>{Logic.UI.decideRenderMode()}</div>;
};

//---------EXPORTS------------\

export default Task;
