//---------IMPORTS------------\

//__i-libraries______
import { FC } from "react";
//__i-style__________
import classes from "./_StatusSummary.module.scss";
//__i-context________
import { ActiveDataContext } from "../../../../../../context/ActiveDataContext";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

//---------COMPONENT----------\

const StatusSummary: FC<props> = function () {
  //__c-hooks________

  const { clientAffectedData } = ActiveDataContext()!;

  //__c-logic________

  const Logic = {
    totalNum: clientAffectedData.length,
    unassignedNum: clientAffectedData.filter((item) => item.status === "none")
      .length,
    doneNum: clientAffectedData.filter((item) => item.status === "done").length,
    progressNum: clientAffectedData.filter((item) => item.status === "progress")
      .length,
    untouchedNum: clientAffectedData.filter(
      (item) => item.status === "untouched"
    ).length,
    UI: {
      Styling: {
        calcWidth(numOfStatus: number) {
          let val: number;
          const percentage = (100 / Logic.totalNum) * numOfStatus;
          val = (percentage * 13) / 100;
          return `${val}rem`;
        },
        forUnassigned() {
          return {
            width: this.calcWidth(Logic.unassignedNum),
            backgroundColor: "var(--unassigned)",
          };
        },
        forDone() {
          return {
            width: this.calcWidth(Logic.doneNum),
            backgroundColor: "var(--done)",
          };
        },
        forProgress() {
          return {
            width: this.calcWidth(Logic.progressNum),
            backgroundColor: "var(--progress)",
          };
        },
        forUntouched() {
          return {
            width: this.calcWidth(Logic.untouchedNum),
            backgroundColor: "var(--untouched)",
          };
        },
      },
    },
  };

  //__c-structure____
  return (
    <div className={classes.body}>
      <div style={Logic.UI.Styling.forUnassigned()}></div>
      <div style={Logic.UI.Styling.forDone()}></div>
      <div style={Logic.UI.Styling.forProgress()}></div>
      <div style={Logic.UI.Styling.forUntouched()}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default StatusSummary;
