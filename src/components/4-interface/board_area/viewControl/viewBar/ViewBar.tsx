//---------IMPORTS------------\

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
