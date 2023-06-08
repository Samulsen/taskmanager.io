//---------IMPORTS------------\

import { useState } from "react";

//__i-style__________
import classes from "./_ViewBar.module.scss";
import homeIcon from "./svgs/homeIcon.svg";
import doneIcon from "./svgs/doneIcon.svg";
import progressIcon from "./svgs/progressIcon.svg";
import untouchedIcon from "./svgs/untouchedIcon.svg";

//__i-components_____
import ViewTemplate from "./viewTemplate/ViewTemplate";
import SepBig from "./seperator/sepBig/SepBig";
import EffectFilter from "./effectFilter/EffectFilter";
import EffectSort from "./effectSort/EffectSort";
import SepSmall from "./seperator/sepSmall/SepSmall";

//---------COMPONENT----------\

const ViewBar = function () {
  const [selectionState, setSelectionState] = useState("Home");

  return (
    <div className={classes.body}>
      <ViewTemplate
        icon={homeIcon}
        effect="Home"
        selectionState={selectionState}
        setSelection={setSelectionState}
      />
      <SepSmall />
      <ViewTemplate
        icon={doneIcon}
        effect="Done"
        selectionState={selectionState}
        setSelection={setSelectionState}
      />
      <SepSmall />
      <ViewTemplate
        icon={progressIcon}
        effect="In Progress"
        selectionState={selectionState}
        setSelection={setSelectionState}
      />
      <SepSmall />
      <ViewTemplate
        icon={untouchedIcon}
        effect="Untouched"
        selectionState={selectionState}
        setSelection={setSelectionState}
      />
      <SepBig />
      <EffectFilter />
      <SepSmall />
      <EffectSort />
    </div>
  );
};

//---------EXPORTS------------\

export default ViewBar;
