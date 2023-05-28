//---------IMPORTS------------\

import classes from "./_main.module.scss";
import ButtonOutside from "../0-independent/buttons/outside/ButtonOutside";

//---------COMPONENT----------\

const Main = function () {
  const logoutRequest = function () {};

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
