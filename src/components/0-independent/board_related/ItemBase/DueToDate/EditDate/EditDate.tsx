//---------IMPORTS------------\

import useClickOutside from "../../../../../../hooks/useClickOutside";
import classes from "./_EditDate.module.scss";
import { FC, Dispatch, SetStateAction } from "react";

//----------PRE---------------\

//__p-types_________

interface props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

//---------COMPONENT----------\

const EditDate: FC<props> = function ({ setEditMode }) {
  return (
    <div className={classes.body} ref={useClickOutside(setEditMode)}>
      <input type="date" name="dateInputEditor" />
    </div>
  );
};

//---------EXPORTS------------\
export default EditDate;
