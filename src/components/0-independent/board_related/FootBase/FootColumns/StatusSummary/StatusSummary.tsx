//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_StatusSummary.module.scss";
//__i-context________
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const StatusSummary: FC<props> = function () {
  //__c-hooks________

  //__c-logic________

  const Logic = {
    UI: {},
    Data: {},
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div
        style={{ width: "2rem", backgroundColor: "var(--unassigned)" }}
      ></div>
      <div style={{ width: "2rem", backgroundColor: "var(--done)" }}></div>
      <div style={{ width: "2rem", backgroundColor: "var(--progress)" }}></div>
      <div style={{ width: "2rem", backgroundColor: "var(--untouched)" }}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default StatusSummary;
