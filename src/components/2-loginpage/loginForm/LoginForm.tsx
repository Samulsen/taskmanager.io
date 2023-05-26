//---------IMPORTS------------\

import classes from "./_LoginForm.module.scss";
import InputOutside from "../../0-independent/inputs/outside/InputOutside";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import PasswordToggler from "../passwordToggler/PasswordToggler";

//---------MAIN---------------\

const loginRequest = function (event: React.FormEvent) {
  event.preventDefault();
  console.log(event);
};

//---------COMPONENT----------\

const LoginForm = function () {
  return (
    <div className={classes.body}>
      <InputOutside
        key="inp-mail"
        individualClass={classes.input + " " + classes.mail}
        type="text"
        name="mailInputOutside"
        placeholder="E - Mail"
      />
      <InputOutside
        key="inp-password"
        individualClass={classes.input + " " + classes.password}
        //NOTE: Temp "type" later deffault password
        type="type"
        name="passwordInputOutside"
        placeholder="Password"
      />
      <PasswordToggler individualClass={classes.toggler} />
      <div className={classes.buttonBox}>
        <ButtonOutside border="green" displayText="Login" />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside border="green" displayText="Register" />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default LoginForm;
