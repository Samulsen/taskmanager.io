//---------IMPORTS------------\

import Line from "../../../0-independent/line/Line";
import Logo from "../../../0-independent/logo/Logo";
import classes from "./_UpperMenu.module.scss";

//---------COMPONENT----------\

const UpperMenu = function () {
  return (
    <div className={classes.body}>
      <Logo individualClass={classes.logo} animation="noDelay" />
      <Line />
    </div>
  );
};

//---------EXPORTS------------\

export default UpperMenu;
