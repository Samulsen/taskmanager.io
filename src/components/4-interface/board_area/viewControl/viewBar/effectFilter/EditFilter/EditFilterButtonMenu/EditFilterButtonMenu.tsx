//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_EditFilterButtonMenu.module.scss";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const EditFilterButtonMenu: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div id="apply" className={classes.apply}>
        Apply
      </div>
      <div id="reset" className={classes.reset}>
        Reset
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default EditFilterButtonMenu;
