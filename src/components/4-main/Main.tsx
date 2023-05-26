//---------IMPORTS------------\

import classes from "./_main.module.scss";
import ButtonOutside from "../0-independent/buttons/outside/ButtonOutside";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";

//---------COMPONENT----------\

const Main = function () {
  const AuthContextLocal = useContext(AuthContext);

  const logoutRequest = function () {
    signOut(auth)
      .then(() => {
        AuthContextLocal!.setUserUID("deffault");
        AuthContextLocal!.setAuthState(false);
      })
      .catch((error) => {});
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
