//---------IMPORTS------------\

import classes from "./_main.module.scss";
import ButtonOutside from "../0-independent/buttons/outside/ButtonOutside";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

//---------COMPONENT----------\

const Main = function () {
  const loggout = AuthContext()!.loggout;

  const logoutRequest = function () {
    return loggout();
  };

  return (
    <div className={classes.main}>
      <ButtonOutside
        border="green"
        displayText="Logout"
        clickMethod={logoutRequest}
      />
    </div>
  );
};

//---------EXPORTS------------\

export default Main;
