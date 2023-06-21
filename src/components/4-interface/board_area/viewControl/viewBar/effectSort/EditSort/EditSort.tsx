//---------IMPORTS------------\

//__i-libraries______
import { Dispatch, FC, SetStateAction } from "react";
//__i-style__________
import classes from "./_EditSort.module.scss";
//__i-context________
//__i-components_____
import useClickOutside from "../../../../../../../hooks/useClickOutside";
import DirectionBox from "./DirectionBox/DirectionBox";
import TypeBox from "./TypeBox/TypeBox";

//----------PRE---------------\

//__p-types_________

interface props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

//---------COMPONENT----------\

//__c-hooks________
const EditSort: FC<props> = function ({ setEditMode }) {
  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body} ref={useClickOutside(setEditMode)}>
      <div className={classes.pointer}></div>
      <DirectionBox />
      <div className={classes.seperator}></div>
      <TypeBox />
    </div>
  );
};

//---------EXPORTS------------\

export default EditSort;
