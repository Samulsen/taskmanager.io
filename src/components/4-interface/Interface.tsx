//---------IMPORTS------------\

import classes from "./_Interface.module.scss";
import { useOutletContext } from "react-router-dom";
import { Outlet } from "react-router-dom";

//---------COMPONENT----------\
const Interface = function () {
  const loggout: () => Promise<void> = useOutletContext();
  return (
    <div className={classes.body}>
      <Outlet context={loggout} />
    </div>
  );
};

//---------EXPORTS------------\

export default Interface;
