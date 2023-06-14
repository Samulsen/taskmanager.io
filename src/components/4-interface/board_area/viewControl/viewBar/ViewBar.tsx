//---------IMPORTS------------\

//__i-libraries______

import { useState, useEffect } from "react";

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

import ViewTemplate from "./viewTemplate/ViewTemplate";
import SepBig from "./seperator/sepBig/SepBig";
import EffectFilter from "./effectFilter/EffectFilter";
import EffectSort from "./effectSort/EffectSort";
import SepSmall from "./seperator/sepSmall/SepSmall";
import { CompositItemData } from "../../../../../types/types";

//---------COMPONENT----------\

const ViewBar = function () {
  //__c-hooks________

  const { viewControl, rawQueryItems } = BoardContext()!;
  const { setClienAffectedData } = ActiveDataContext()!;

  //__c-logic________

  const Logic = {
    initAffectionChain() {
      return Promise.resolve(rawQueryItems);
    },
    View: {
      Option: {
        forHome(none_AffectedData: CompositItemData[]) {},
        forDone(none_AffectedData: CompositItemData[]) {},
        forProgress(none_AffectedData: CompositItemData[]) {},
        forUntouched(none_AffectedData: CompositItemData[]) {},
      },
      decide() {
        if (viewControl.state === "Home") {
          return this.Option.forHome;
        }
        if (viewControl.state === "Done") {
          return this.Option.forDone;
        }
        if (viewControl.state === "In Progress") {
          return this.Option.forProgress;
        }
        if (viewControl.state === "Untouched") {
          return this.Option.forUntouched;
        }
      },
    },
    Filter: {
      Option: {
        testOption() {},
      },

      decide(viewAffectedData: CompositItemData[]) {},
    },
    Sort: {},
    finishAffectionChain(view_filter_sort_affectedData: CompositItemData[]) {
      setClienAffectedData(view_filter_sort_affectedData);
    },
  };

  //__c-effects______

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
