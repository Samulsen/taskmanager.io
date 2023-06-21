//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_EditFilterSelectionMenuHead.module.scss";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const EditFilterSelectionMenuHead: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div className={classes.target}>Target</div>
      <div className={classes.action}>Action</div>
      <div className={classes.value}>Value</div>
    </div>
  );
};

//---------EXPORTS------------\

export default EditFilterSelectionMenuHead;
