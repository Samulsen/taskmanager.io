//---------IMPORTS------------\

import Title from "../../0-independent/title/Title";
import classes from "./_SidebarControl.module.scss";

//---------COMPONENT----------\

const SidebarControl = function () {
  return (
    <div className={classes.body}>
      <div className={classes.menu_upper}></div>
      <div className={classes.header}>
        <Title individualClass={classes.transfomer} />
      </div>
      <div className={classes.menu_lower}></div>
    </div>
  );
};

//---------EXPORTS------------\

export default SidebarControl;
