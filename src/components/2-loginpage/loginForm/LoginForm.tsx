//---------IMPORTS------------\

import classes from "./_LoginForm.module.scss";
import { Form } from "react-router-dom";

//---------COMPONENT----------\

const LoginForm = function () {
  return (
    <Form className={classes.body} method="post">
      <input
        className={classes.input}
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        className={classes.input}
        type="text"
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
