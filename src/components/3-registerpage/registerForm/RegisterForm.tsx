//---------IMPORTS------------\

import classes from "./_RegisterForm.module.scss";
import { useRef } from "react";

//__i-components_____
import CheckedInput from "./checkedInput/CheckedInput";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import PasswordToggler from "../../0-independent/passwordToggler/PasswordToggler";

//---------COMPONENT----------\

const RegisterForm = function () {
  return (
    <div className={classes.body}>
      <CheckedInput
        key="inpNameFirst"
        type="text"
        individualClass={classes.firstName}
        placeholder="First Name"
        name="input-firstName"
      />
      <CheckedInput
        key="inpNameLast"
        type="text"
        individualClass={classes.lastName}
        placeholder="Last Name"
        name="input-lastName"
      />
      <CheckedInput
        key="inpMail"
        type="text"
        individualClass={classes.mail}
        placeholder="E - Mail"
        name="input-mail"
      />
      <CheckedInput
        key="inpPassInit"
        type="password"
        individualClass={classes.password}
        placeholder="Password"
        name="input-passwordInit"
      />
      <CheckedInput
        key="inpPassRep"
        type="password"
        individualClass={classes.repeat}
        placeholder="Repeat Password"
        name="input-passwordRepeat"
      />
    </div>
  );
};

//---------EXPORTS------------\

export default RegisterForm;
