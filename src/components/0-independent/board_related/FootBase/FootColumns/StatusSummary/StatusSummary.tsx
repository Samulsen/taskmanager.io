//---------IMPORTS------------\

//__i-libraries______
import { FC, useLayoutEffect, useState } from "react";
//__i-style__________
import classes from "./_StatusSummary.module.scss";
//__i-context________
import { ActiveDataContext } from "../../../../../../context/ActiveDataContext";
//__i-components_____

//----------PRE---------------\

//__p-types_________

interface props {}

interface style {
  width: string;
  backgroundColor: string;
}

interface partials {
  unassigned: style;
  progress: style;
  done: style;
  untouched: style;
}

const emptyData: partials = {
  unassigned: { width: "0rem", backgroundColor: "grey" },
  progress: { width: "0rem", backgroundColor: "grey" },
  done: { width: "0rem", backgroundColor: "grey" },
  untouched: { width: "0rem", backgroundColor: "grey" },
};

//---------COMPONENT----------\

const StatusSummary: FC<props> = function () {
  //__c-hooks________

  const { clientAffectedData } = ActiveDataContext()!;
  const [partials, updatePartials] = useState<partials>(emptyData);

  //__c-logic________

  const Logic = {
    tempAcc: {} as partials,
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
          Logic.tempAcc.unassigned = {
            width: this.calcWidth(Logic.unassignedNum),
            backgroundColor: "var(--unassigned)",
          };
        },
        forDone() {
          Logic.tempAcc.done = {
            width: this.calcWidth(Logic.doneNum),
            backgroundColor: "var(--done)",
          };
        },
        forProgress() {
          Logic.tempAcc.progress = {
            width: this.calcWidth(Logic.progressNum),
            backgroundColor: "var(--progress)",
          };
        },
        forUntouched() {
          Logic.tempAcc.untouched = {
            width: this.calcWidth(Logic.untouchedNum),
            backgroundColor: "var(--untouched)",
          };
        },
      },
    },
  };

  //__c-effects______

  useLayoutEffect(() => {
    Logic.UI.Styling.forUnassigned();
    Logic.UI.Styling.forDone();
    Logic.UI.Styling.forProgress();
    Logic.UI.Styling.forUntouched();
    updatePartials(Logic.tempAcc);
    if (clientAffectedData.length === 0) updatePartials(emptyData);
  }, [clientAffectedData]);

  //__c-structure____
  return (
    <div className={classes.body}>
      <div style={partials.unassigned}></div>
      <div style={partials.done}></div>
      <div style={partials.progress}></div>
      <div style={partials.untouched}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default StatusSummary;
