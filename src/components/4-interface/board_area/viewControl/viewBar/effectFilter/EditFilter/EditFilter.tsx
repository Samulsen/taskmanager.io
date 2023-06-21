//---------IMPORTS------------\

//__i-libraries______
import { FC, Dispatch, SetStateAction } from "react";
//__i-style__________
import classes from "./_EditFilter.module.scss";
//__i-context________
//__i-components_____
import useClickOutside from "../../../../../../../hooks/useClickOutside";
import EditFilterSelectionMenu from "./EditFilterSelectionMenu/EditFilterSelectionMenu";
import EditFilterButtonMenu from "./EditFilterButtonMenu/EditFilterButtonMenu";

//----------PRE---------------\

//__p-types_________

interface props {
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

//---------COMPONENT----------\

const EditFilter: FC<props> = function ({ setEditMode }) {
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
      <EditFilterSelectionMenu />
      <EditFilterButtonMenu />
    </div>
  );
};

//---------EXPORTS------------\

export default EditFilter;
