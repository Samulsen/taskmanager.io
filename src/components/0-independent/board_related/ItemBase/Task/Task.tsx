//---------IMPORTS------------\

import EditTask from "./EditTask/EditTask";
import classes from "./_Task.module.scss";
import { FC, useState, MouseEvent } from "react";

//---------COMPONENT----------\

const Task: FC<{ displayValue: string }> = function ({ displayValue }) {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);
  const [currentDisplayValue, setCurrentDisplayValue] = useState(displayValue);

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
          return <EditTask setEditMode={setEditMode} />;
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
