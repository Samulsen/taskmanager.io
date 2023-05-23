//---------IMPORTS------------\

import classes from "./_LoginForm.module.scss";
import { Form } from "react-router-dom";

//---------COMPONENT----------\

const LoginForm = function () {
  return (
    <Form className={classes.form} method="post">
      {/* Username Input */}
      {/* Passowrd Input */}
      <div className={classes.form__buttonBox}>
        {/* Login */}
        <div className={classes.form__buttonBox_or}></div>
        {/* Register */}
      </div>
    </Form>
  );
};

//---------EXPORTS------------\

export default LoginForm;
