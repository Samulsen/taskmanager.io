//---------IMPORTS------------\

import classes from "./_LoginForm.module.scss";
import { Form } from "react-router-dom";
import InputOutside from "../../0-independent/inputs/outside/InputOutside";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import PasswordToggler from "../passwordToggler/PasswordToggler";

//---------COMPONENT----------\

const LoginForm = function () {
  return (
    <Form className={classes.body} method="post">
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
        type="password"
        name="passwordInputOutside"
        placeholder="Password"
      />
      <PasswordToggler individualClass={classes.toggler} />
      <div className={classes.buttonBox}>
        <ButtonOutside border="green" displayText="Login" name="loginButton" />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside
          border="green"
          displayText="Register"
          name="registerButton"
        />
      </div>
    </Form>
  );
};

//---------EXPORTS------------\

export default LoginForm;
