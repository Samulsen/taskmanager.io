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
        name="username"
        placeholder="Username"
      />
      <InputOutside
        individualClass={classes.input}
        type="password"
        name="password"
        placeholder="Password"
      />
      <div className={classes.buttonBox}>
        {/* Login */}
        <div className={classes.buttonBox_or}>or</div>
        {/* Register */}
      </div>
    </Form>
  );
};

//---------EXPORTS------------\

export default LoginForm;
