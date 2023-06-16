//---------IMPORTS------------\

import classes from "./_EditTask.module.scss";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { FC, Dispatch, SetStateAction } from "react";

//----------PRE---------------\

//__p-types_________

interface props {
  editMode: { set: Dispatch<SetStateAction<boolean>> };
  displayValue: { update: Dispatch<SetStateAction<string>>; current: string };
}

//---------COMPONENT----------\

const EditTask: FC<props> = function ({ editMode, displayValue }) {
  return (
    <div className={classes.body} ref={useClickOutside(editMode.set)}>
      <input type="text" value={displayValue.current} />
    </div>
  );
};

//---------EXPORTS------------\
export default EditTask;
