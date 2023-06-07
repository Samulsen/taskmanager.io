//---------IMPORTS------------\

import classes from "./_SidebarControl.module.scss";
import LowerMenu from "./lower/LowerMenu";
import MiddleBarHeader from "./middle/MiddleBarHeader";
import UpperMenu from "./upper/UpperMenu";

//---------COMPONENT----------\

const SidebarControl = function () {
  return (
    <div className={classes.body}>
      <UpperMenu />
      <MiddleBarHeader />
      <LowerMenu />
    </div>
  );
};

//---------EXPORTS------------\

export default SidebarControl;
