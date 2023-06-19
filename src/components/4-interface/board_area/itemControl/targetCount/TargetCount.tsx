//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_TargetCount.module.scss";
import { ItemControlContext } from "../../../../../context/ItemControlContext";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const TargetCount: FC<props> = function () {
  //__c-hooks________

  const { itemSelection } = ItemControlContext()!;

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return <div className={classes.body}>{itemSelection.list.length}</div>;
};

//---------EXPORTS------------\

export default TargetCount;
