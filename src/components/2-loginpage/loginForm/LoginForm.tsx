//---------IMPORTS------------\

import classes from "./_LoginForm.module.scss";
import { Form } from "react-router-dom";
import InputOutside from "../../0-independent/inputs/outside/InputOutside";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";

//---------COMPONENT----------\

const LoginForm = function () {
  return (
    <Form className={classes.body} method="post">
      <InputOutside
        individualClass={classes.input}
        type="text"
        name="usernameInputOutside"
        placeholder="Username"
      />
      <InputOutside
        individualClass={classes.input}
        type="password"
        name="passwordInputOutside"
        placeholder="Password"
      />
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
