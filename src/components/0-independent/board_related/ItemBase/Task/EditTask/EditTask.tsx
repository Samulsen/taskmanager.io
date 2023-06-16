//---------IMPORTS------------\

import classes from "./_EditTask.module.scss";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { FC, Dispatch, SetStateAction } from "react";

//----------PRE---------------\

//__p-types_________

//---------COMPONENT----------\

const EditTask: FC<{ setEditMode: Dispatch<SetStateAction<boolean>> }> =
  function ({ setEditMode }) {
    return (
      <div className={classes.body} ref={useClickOutside(setEditMode)}>
        <input type="text" name="" id="" />
      </div>
    );
  };

//---------EXPORTS------------\
export default EditTask;
