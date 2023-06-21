//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_TypeBox.module.scss";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const TypeBox: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div>Priority</div>
      <div>Itemage</div>
      <div>Date</div>
    </div>
  );
};

//---------EXPORTS------------\

export default TypeBox;
