//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_TargetDelete.module.scss";
import deleteIcon from "./delete.svg";
//__i-context________
//__i-components_____

//----------PRE---------------\
//__p-types_________

interface props {}

//---------COMPONENT----------\

const TargetDelete: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <img src={deleteIcon} alt="deleteIconItemControl" />
      Delete
    </div>
  );
};

//---------EXPORTS------------\

export default TargetDelete;
