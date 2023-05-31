//---------IMPORTS------------\

import classes from "./_RegisterForm.module.scss";
import { useRef } from "react";

//__i-components_____
import CheckedInput from "./checkedInput/CheckedInput";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import Info from "./Info/Info";
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
      <Info
        description="E - Mail must be of valid format (email@provider.com) and unused!"
        position={classes.mailInfo}
      />
      <CheckedInput
        key="inpPassInit"
        type="password"
        individualClass={classes.password}
        placeholder="Password"
        name="input-passwordInit"
      />
      <Info
        description="Password must be at least 4 char- acters long and has no whitespace!"
        position={classes.passwordInfo}
      />
      <PasswordToggler
        individualClass={classes.password_toggle}
        setPasswordVisibility={""}
      />
      <CheckedInput
        key="inpPassRep"
        type="password"
        individualClass={classes.repeat}
        placeholder="Repeat Password"
        name="input-passwordRepeat"
      />
      <PasswordToggler
        individualClass={classes.repeat_toggle}
        setPasswordVisibility={""}
      />
      <div className={classes.buttonBox}>
        <ButtonOutside border="white" displayText="Back" clickMethod={""} />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside border="grey" displayText="Continue" clickMethod={""} />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default RegisterForm;
