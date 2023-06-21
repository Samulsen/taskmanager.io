//---------IMPORTS------------\

import { useState } from "react";
//__i-style__________
import classes from "./_EffectFilter.module.scss";
import filterIcon from "./filterIcon.svg";

//---------COMPONENT----------\

const EffectFilter = function () {
  //__c-hooks________

  const [editMode, setEditMode] = useState(false);

  //__c-logic________

  const Logic = {
    UI: {
      Classes: {},
    },
  };

  //__c-structure____

  return (
    <div className={classes.body}>
      <img className={classes.icon} src={filterIcon} alt="filterIconBar" />
      Filter
    </div>
  );
};

//---------EXPORTS------------\

export default EffectFilter;
