//---------IMPORTS------------\

import classes from "./_ViewBar.module.scss";
import EffectFilter from "./effectFilter/EffectFilter";
import EffectSort from "./effectSort/EffectSort";
import SepBig from "./seperator/sepBig/SepBig";
import SepSmall from "./seperator/sepSmall/SepSmall";
import ViewHome from "./viewHome/ViewHome";
import ViewProgress from "./viewProgress/ViewProgress";
import ViewUntouched from "./viewUntouched/ViewUntouched";

//---------COMPONENT----------\

const ViewBar = function () {
  return (
    <div className={classes.body}>
      <ViewHome />
      <SepSmall />
      <ViewHome />
      <SepSmall />
      <ViewProgress />
      <SepSmall />
      <ViewUntouched />
      <SepBig />
      <EffectFilter />
      <SepSmall />
      <EffectSort />
    </div>
  );
};

//---------EXPORTS------------\

export default ViewBar;
