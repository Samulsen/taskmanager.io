//---------IMPORTS------------\

import { itemOrigin } from "../ItemBase";
import EditStatus from "./EditStatus/EditStatus";
import classes from "./_Status.module.scss";
import { FC, useState } from "react";

//----------PRE---------------\

//__p-types_________

interface props {
  displayValue: string;
  itemOrigin: itemOrigin;
}

//---------COMPONENT----------\

const Status: FC<props> = function ({ displayValue, itemOrigin }) {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      Edit: {
        enable() {
          setEditMode(true);
        },
        render() {
          return editMode ? (
            <EditStatus
              displayValue={displayValue}
              itemOrigin={itemOrigin}
              setEditMode={setEditMode}
            />
          ) : (
            <></>
          );
        },
      },
      Display: {
        render() {
          if (displayValue === "none") {
            return (
              <div className={`${classes.display} ${classes.default}`}></div>
            );
          }

          if (displayValue === "done") {
            return (
              <div className={`${classes.display} ${classes.done}`}>Done!</div>
            );
          }

          if (displayValue === "progress") {
            return (
              <div className={`${classes.display} ${classes.progress}`}>
                In Progress!
              </div>
            );
          }
          if (displayValue === "untouched") {
            return (
              <div className={`${classes.display} ${classes.untouched}`}>
                Untouched!
              </div>
            );
          }
        },
      },
    },
  };

  //__c-structure____

  return (
    <div className={classes.body} onClick={Logic.UI.Edit.enable}>
      {Logic.UI.Display.render()}
      {Logic.UI.Edit.render()}
    </div>
  );
};

//---------EXPORTS------------\
export default Status;
