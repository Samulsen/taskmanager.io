//---------IMPORTS------------\

import classes from "./_LowerMenu.module.scss";
import ConfigButton from "./configButton/ConfigButton";
import LoggoutButton from "./loggoutButton/LoggoutButton";
import ProfileButton from "./profileButton/ProfileButton";
import VersionLabel from "./versionLabel/VersionLabel";
import Line from "../../../0-independent/line/Line";

//---------COMPONENT----------\

const LowerMenu = function () {
  return (
    <div className={classes.body}>
      <Line />
      <LoggoutButton />
      <ConfigButton />
      <ProfileButton />
      <Line />
      <VersionLabel />
    </div>
  );
};

//---------EXPORTS------------\

export default LowerMenu;
