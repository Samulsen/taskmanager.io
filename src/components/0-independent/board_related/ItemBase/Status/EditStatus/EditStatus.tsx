//---------IMPORTS------------\

import classes from "./_EditStatus.module.scss";
import { FC, Dispatch, SetStateAction, MouseEvent } from "react";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { itemOrigin } from "../../ItemBase";

//----------PRE---------------\

//__p-types_________

interface props {
  displayValue: string;
  itemOrigin: itemOrigin;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}
//---------COMPONENT----------\

const EditStatus: FC<props> = function ({
  displayValue,
  itemOrigin,
  setEditMode,
}) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {
      Edit: {
        disable() {
          setEditMode(false);
        },
      },
    },
    Data: {
      applyLabel(event: MouseEvent<HTMLDivElement>) {
        const targetOrigin = (event.target as any).innerHTML;
        if (targetOrigin === "") {
          //none
        }
        if (targetOrigin === "done") {
        }

        if (targetOrigin === "progress") {
        }

        if (targetOrigin === "untouched") {
        }
      },
    },
  };

  //__c-structure____

  return (
    <div
      className={classes.body}
      onClick={Logic.Data.applyLabel}
      ref={useClickOutside(setEditMode)}
    >
      <div className={classes.pointer}></div>
      <div className={classes.default}></div>
      <div className={classes.done}>Done!</div>
      <div className={classes.progress}>In Progress!</div>
      <div className={classes.untouched}>Untouched!</div>
    </div>
  );
};

//---------EXPORTS------------\
export default EditStatus;
