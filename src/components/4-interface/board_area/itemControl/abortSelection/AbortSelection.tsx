//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_AbortSelection.module.scss";
import abortIcon from "./abort.svg";
//__i-context________
//__i-components_____

//----------PRE---------------\
//__p-types_________

interface props {}

//---------COMPONENT----------\

const AbortSelection: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <img src={abortIcon} alt="abortItemControl" />
    </div>
  );
};

//---------EXPORTS------------\

export default AbortSelection;
