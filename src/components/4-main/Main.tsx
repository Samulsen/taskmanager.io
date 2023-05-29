//---------IMPORTS------------\

import classes from "./_main.module.scss";
import ButtonOutside from "../0-independent/buttons/outside/ButtonOutside";
import { AuthContext } from "../../context/AuthContext";

//---------COMPONENT----------\

const Main = function () {
  const AuthLogic = AuthContext();

  const logoutRequest = function () {
    return AuthLogic?.loggout();
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
