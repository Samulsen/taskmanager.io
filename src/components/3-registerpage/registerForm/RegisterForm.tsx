//---------IMPORTS------------\

import classes from "./_RegisterForm.module.scss";
import { useRef, useState } from "react";

//__i-components_____
import CheckedInput from "./checkedInput/CheckedInput";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import Info from "./Info/Info";
import PasswordToggler from "../../0-independent/passwordToggler/PasswordToggler";

//---------COMPONENT----------\

const RegisterForm = function () {
  //__c-hooks________
  const [visbilityInit, setVisibilityInit] = useState("password");
  const [visbilityRep, setVisibilityRep] = useState("password");
  //__c-logic________

  const Logic = {};

  //__c-invocation___
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
        key="info-email"
        description="E - Mail must be of valid format (email@provider.com) and unused!"
        position={classes.mailInfo}
      />
      <CheckedInput
        key="inpPassInit"
        type={visbilityInit}
        individualClass={classes.password}
        placeholder="Password"
        name="input-passwordInit"
      />
      <Info
        key="info-password"
        description="Password must be at least 4 charac- ters long and contains no whitespaces!"
        position={classes.passwordInfo}
      />
      <PasswordToggler
        key="toggler-init"
        individualClass={classes.password_toggle}
        setPasswordVisibility={setVisibilityInit}
      />
      <CheckedInput
        key="inpPassRep"
        type={visbilityRep}
        individualClass={classes.repeat}
        placeholder="Repeat Password"
        name="input-passwordRepeat"
      />
      <PasswordToggler
        key="toggler-rep"
        individualClass={classes.repeat_toggle}
        setPasswordVisibility={setVisibilityRep}
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
