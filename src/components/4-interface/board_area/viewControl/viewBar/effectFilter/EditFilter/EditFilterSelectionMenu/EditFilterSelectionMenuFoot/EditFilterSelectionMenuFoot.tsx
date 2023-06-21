//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_EditFilterSelectionMenuFoot.module.scss";
import FilterTarget from "./FilterTarget/FilterTarget";
import FilterAction from "./FilterAction/FilterAction";
import FilterValue from "./FilterValue/FilterValue";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const EditFilterSelectionMenuFoot: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <FilterTarget />
      <FilterAction />
      <FilterValue />
    </div>
  );
};

//---------EXPORTS------------\

export default EditFilterSelectionMenuFoot;
