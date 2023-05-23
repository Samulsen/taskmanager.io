//---------IMPORTS------------\

import classes from "./_LoginForm.module.scss";
import { Form } from "react-router-dom";
import InputLogReg from "../../0-independent/inputs/LogReg/InputLogReg";
import ButtonOutside from "../../0-independent/buttons/ButtonOutside";

//---------COMPONENT----------\

const LoginForm = function () {
  return (
    <Form className={classes.body} method="post">
      <InputLogReg
        individualClass={classes.input}
        type="text"
        name="username"
        placeholder="Username"
      />
      <InputLogReg
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
