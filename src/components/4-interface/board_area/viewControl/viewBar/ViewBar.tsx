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

import ViewTemplate from "./viewTemplate/ViewTemplate";
import SepBig from "./seperator/sepBig/SepBig";
import EffectFilter from "./effectFilter/EffectFilter";
import EffectSort from "./effectSort/EffectSort";
import SepSmall from "./seperator/sepSmall/SepSmall";
import { CompositItemData } from "../../../../../types/types";

//---------COMPONENT----------\

const ViewBar = function () {
  //__c-hooks________

  const { viewControl, rawQueryItems, sortControl, filterControl } =
    BoardContext()!;
  const { setClienAffectedData } = ActiveDataContext()!;

  //__c-logic________

  const Logic = {
    initAffectionChain() {
      return Promise.resolve(rawQueryItems.data);
    },
    View: {
      Option: {
        forHome(
          none_AffectedData: CompositItemData[]
        ): Promise<CompositItemData[]> {
          return new Promise((resolve) => {
            resolve(none_AffectedData);
          });
        },
        forDone(
          none_AffectedData: CompositItemData[]
        ): Promise<CompositItemData[]> {
          return new Promise((resolve) => {
            const onlyDone = none_AffectedData.filter(
              (item) => item.status === "done"
            );
            resolve(onlyDone);
          });
        },
        // forProgress(none_AffectedData: CompositItemData[]) {},
        // forUntouched(none_AffectedData: CompositItemData[]) {},
      },
      decide(none_AffectedData: CompositItemData[]) {
        if (viewControl.state === "Home") {
          return this.Option.forHome(none_AffectedData);
        }
        if (viewControl.state === "Done") {
          return this.Option.forDone(none_AffectedData);
        }
        // if (viewControl.state === "In Progress") {
        //   return this.Option.forProgress(none_AffectedData);
        // }
        // if (viewControl.state === "Untouched") {
        //   return this.Option.forUntouched(none_AffectedData);
        // }
        return [];
      },
    },
    Filter: {
      Option: {
        unaffected(
          view_AffectedData: CompositItemData[]
        ): Promise<CompositItemData[]> {
          return new Promise((resolve) => {
            resolve(view_AffectedData);
          });
        },
      },
      decide(view_AffectedData: CompositItemData[]) {
        if (filterControl.state === "none") {
          return this.Option.unaffected(view_AffectedData);
        }
        return [];
      },
    },
    Sort: {
      Option: {
        unaffected(
          view_filter_AffectedData: CompositItemData[]
        ): Promise<CompositItemData[]> {
          return new Promise((resolve) => {
            if (sortControl.direction === "ase") {
              const ascendingOrder = view_filter_AffectedData.sort(
                (a, b) => a.timestamp.seconds - b.timestamp.seconds
              );

              resolve(ascendingOrder);
            } else {
              const descendingOrder = view_filter_AffectedData.sort(
                (a, b) => b.timestamp.seconds - a.timestamp.seconds
              );

              resolve(descendingOrder);
            }
          });
        },
      },
      decide(view_filter_AffectedData: CompositItemData[]) {
        if (sortControl.state === "creationtime") {
          return this.Option.unaffected(view_filter_AffectedData);
        }
        if (sortControl.state === "priority") {
        }
        if (sortControl.state === "date") {
        }
        return [];
      },
    },
    finishAffectionChain(view_filter_sort_affectedData: CompositItemData[]) {
      setClienAffectedData(view_filter_sort_affectedData);
    },
  };

  //__c-effects______

  setClienAffectedData(rawQueryItems.data);

  // useEffect(() => {
  // Logic.initAffectionChain()
  //   .then(Logic.View.decide.bind(Logic.View))
  //   .then(Logic.Filter.decide.bind(Logic.Filter))
  //   .then(Logic.Sort.decide.bind(Logic.Sort))
  //   .then(Logic.finishAffectionChain.bind(Logic));
  // }, [
  //   viewControl.state,
  //   sortControl.state,
  //   filterControl.state,
  //   rawQueryItems.data,
  // ]);

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
