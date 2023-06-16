//---------IMPORTS------------\

import classes from "./_EditTask.module.scss";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { FC, Dispatch, SetStateAction, ChangeEvent } from "react";

//----------PRE---------------\

//__p-types_________

interface props {
  editMode: { set: Dispatch<SetStateAction<boolean>> };
  displayValue: { update: Dispatch<SetStateAction<string>>; current: string };
}

//---------COMPONENT----------\

const EditTask: FC<props> = function ({ editMode, displayValue }) {
  //__c-hooks________

  // const []

  //__c-logic________
  const Logic = {
    UI: {
      handleChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.target === event.currentTarget) {
          displayValue.update(event.currentTarget.value);
        }
      },
    },
  };
  //__c-structure____
  return (
    <div className={classes.body} ref={useClickOutside(editMode.set)}>
      <input
        autoFocus
        name="editTaskInput"
        type="text"
        value={displayValue.current}
        onChange={Logic.UI.handleChange}
      />
    </div>
  );
};

//---------EXPORTS------------\
export default EditTask;
