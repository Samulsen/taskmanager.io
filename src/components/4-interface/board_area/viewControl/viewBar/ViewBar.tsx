//---------IMPORTS------------\

//__i-libraries______

import { useState, useEffect, useCallback } from "react";

//__i-style__________

import classes from "./_ViewBar.module.scss";
import homeIcon from "./svgs/homeIcon.svg";
import doneIcon from "./svgs/doneIcon.svg";
import progressIcon from "./svgs/progressIcon.svg";
import untouchedIcon from "./svgs/untouchedIcon.svg";

//__i-context________

import { ActiveDataContext } from "../../../../../context/ActiveDataContext";
import { BoardContext } from "../../../../../context/BoardContext";

//__i-components_____

import { CompositItemData } from "../../../../../types/types";
import ViewTemplate from "./viewTemplate/ViewTemplate";
import SepBig from "./seperator/sepBig/SepBig";
import EffectFilter from "./effectFilter/EffectFilter";
import EffectSort from "./effectSort/EffectSort";
import SepSmall from "./seperator/sepSmall/SepSmall";

//---------COMPONENT----------\

const ViewBar = function () {
  //__c-hooks________

  const { viewControl, rawQueryItems, sortControl, filterControl } =
    BoardContext()!;
  const { setClienAffectedData } = ActiveDataContext()!;

  //__c-logic________

  const Logic = {
    tempAffectionDataPool: rawQueryItems.data as CompositItemData[],
    View: {
      Option: {
        forHome() {},
        forDone() {
          const onlyDone = Logic.tempAffectionDataPool.filter(
            (item) => item.status === "done"
          );
          Logic.tempAffectionDataPool = onlyDone;
        },
        forProgress() {
          const onlyProgress = Logic.tempAffectionDataPool.filter(
            (item) => item.status === "progress"
          );
          Logic.tempAffectionDataPool = onlyProgress;
        },
        forUntouched() {
          const onlyUntouched = Logic.tempAffectionDataPool.filter(
            (item) => item.status === "untouched"
          );
          Logic.tempAffectionDataPool = onlyUntouched;
        },
      },
      decide() {
        if (viewControl.state === "Home") {
          this.Option.forHome();
        }
        if (viewControl.state === "Done") {
          this.Option.forDone();
        }
        if (viewControl.state === "In Progress") {
          this.Option.forProgress();
        }
        if (viewControl.state === "Untouched") {
          this.Option.forUntouched();
        }

        return Logic;
      },
    },
    Filter: {
      decide() {
        return Logic;
      },
    },
    Sort: {
      Option: {
        unaffected() {
          if (sortControl.direction === "ase") {
            const ascendingOrder = Logic.tempAffectionDataPool.sort(
              (a, b) => a.timestamp.seconds - b.timestamp.seconds
            );
            Logic.tempAffectionDataPool = ascendingOrder;
          } else {
            const descendingOrder = Logic.tempAffectionDataPool.sort(
              (a, b) => b.timestamp.seconds - a.timestamp.seconds
            );
            Logic.tempAffectionDataPool = descendingOrder;
          }
        },
      },
      decide() {
        if (sortControl.state === "creationtime") {
          Logic.Sort.Option.unaffected();
        }
        return Logic;
      },
    },
    setFinalAffection() {
      setClienAffectedData(this.tempAffectionDataPool);
    },
  };

  //__c-effects______

  useEffect(() => {
    Logic.View.decide().Filter.decide().Sort.decide().setFinalAffection();
  }, [viewControl, sortControl, filterControl, rawQueryItems]);

  //__c-structure____

  return (
    <div className={classes.body}>
      <ViewTemplate icon={homeIcon} effect="Home" />
      <SepSmall />
      <ViewTemplate icon={doneIcon} effect="Done" />
      <SepSmall />
      <ViewTemplate icon={progressIcon} effect="In Progress" />
      <SepSmall />
      <ViewTemplate icon={untouchedIcon} effect="Untouched" />
      <SepBig />
      <EffectFilter />
      <SepSmall />
      <EffectSort />
    </div>
  );
};

//---------EXPORTS------------\

export default ViewBar;
