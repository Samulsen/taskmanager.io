//---------IMPORTS------------\

import classes from "./_Anchor.module.scss";
import { Outlet } from "react-router-dom";

//---------COMPONENT----------\

// const Anchor: React.FC<{ children: ReactNode }> = function (props) {
//   return <div className={classes.anchor}>{props.children}</div>;
// };

const Anchor = function () {
  return <div className={classes.anchor}>{<Outlet />}</div>;
};

//---------EXPORTS------------\

export default Anchor;
