//---------IMPORTS------------\

import classes from "./_BoardBarMenu.module.scss";
import Line from "../../../0-independent/line/Line";
import LinkTotal from "./linkTotal/LinkTotal";
import NewBoard from "./newBoard/NewBoard";

//---------COMPONENT----------\

const BoardBarMenu = function () {
  return (
    <div className={classes.body}>
      <div className={classes.title}>Workspace</div>
      <LinkTotal />
      <NewBoard />
      <Line />
    </div>
  );
};

//---------EXPORTS------------\

export default BoardBarMenu;
