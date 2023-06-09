//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_EditFilterSelectionMenu.module.scss";
import EditFilterSelectionMenuHead from "./EditFilterSelectionMenuHead/EditFilterSelectionMenuHead";
import EditFilterSelectionMenuFoot from "./EditFilterSelectionMenuFoot/EditFilterSelectionMenuFoot";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const EditFilterSelectionMenu: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <EditFilterSelectionMenuHead />
      <div className={classes.seperator}></div>
      <EditFilterSelectionMenuFoot />
    </div>
  );
};

//---------EXPORTS------------\

export default EditFilterSelectionMenu;
