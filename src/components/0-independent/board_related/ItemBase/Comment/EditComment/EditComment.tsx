//---------IMPORTS------------\

import classes from "./_EditComment.module.scss";
import { FC, useState, Dispatch, SetStateAction } from "react";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import { itemOrigin } from "../../ItemBase";

//----------PRE---------------\

//__p-types_________

interface props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
  itemOrigin: itemOrigin;
  currentDisplayValue: string;
}

//---------COMPONENT----------\

const EditComment: FC<props> = function ({ setEditMode, itemOrigin }) {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };
  //__c-structure____

  return (
    <div className={classes.body} ref={useClickOutside(setEditMode)}>
      <div className={classes.pointer}></div>
      <textarea name={"txtarea " + itemOrigin.id}></textarea>
    </div>
  );
};

//---------EXPORTS------------\
export default EditComment;
