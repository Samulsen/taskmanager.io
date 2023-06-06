//---------IMPORTS------------\

import Title from "../../0-independent/title/Title";
import classes from "./_SidebarControl.module.scss";
import LowerMenu from "./lower/LowerMenu";
import UpperMenu from "./upper/UpperMenu";

//---------COMPONENT----------\

const SidebarControl = function () {
  return (
    <div className={classes.body}>
      <UpperMenu />
      <div className={classes.header}>
        <Title individualClass={classes.transfomer} />
      </div>
      <LowerMenu />
    </div>
  );
};

//---------EXPORTS------------\

export default SidebarControl;
