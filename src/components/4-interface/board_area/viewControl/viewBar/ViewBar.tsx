//---------IMPORTS------------\

//__i-style__________
import classes from "./_ViewBar.module.scss";
import homeIcon from "./svgs/homeIcon.svg";

//__i-components_____
import EffectFilter from "./effectFilter/EffectFilter";
import EffectSort from "./effectSort/EffectSort";
import SepBig from "./seperator/sepBig/SepBig";
import SepSmall from "./seperator/sepSmall/SepSmall";
import ViewTemplate from "./viewTemplate/ViewTemplate";

//---------COMPONENT----------\

const ViewBar = function () {
  return (
    <div className={classes.body}>
      <ViewTemplate icon={homeIcon} effect="Home" />
      <SepSmall />
      {/*  */}
      <SepSmall />
      {/*  */}
      <SepSmall />
      {/*  */}
      <SepBig />
      <EffectFilter />
      <SepSmall />
      <EffectSort />
    </div>
  );
};

//---------EXPORTS------------\

export default ViewBar;
