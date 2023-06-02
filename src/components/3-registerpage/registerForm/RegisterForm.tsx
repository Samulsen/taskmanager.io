//---------IMPORTS------------\

import classes from "./_RegisterForm.module.scss";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//__i-components_____
import CheckedInput from "./checkedInput/CheckedInput";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import Info from "./Info/Info";
import PasswordToggler from "../../0-independent/passwordToggler/PasswordToggler";
import logCol from "../../../util/logColor";

//---------COMPONENT----------\

const RegisterForm = function () {
  //__c-hooks________

  const [visbilityInit, setVisibilityInit] = useState("password");
  const [visbilityRep, setVisibilityRep] = useState("password");
  const [formValidity, setValidity] = useState(false);
  const navigate = useNavigate();

  //__c-logic________

  const Logic = {
    goBackToLogin() {
      navigate("/public/login");
    },
    allowRegistration() {
      logCol("Allow registration!", "green");
    },
    blockRegistration() {
      logCol("Form invalid, registration disallowed!", "red");
    },
    evaluateButtonState() {
      return formValidity ? "valid" : "invalid";
    },
    handleRegisterRequest() {
      if (formValidity) {
        this.allowRegistration();
      } else {
        this.blockRegistration();
      }
    },
  };

  //__c-invocation___
  return (
    <div className={classes.body}>
      <CheckedInput
        key="inpNameFirst"
        type="text"
        position={classes.firstName}
        placeholder="First Name"
        name="input-firstName"
      />
      <CheckedInput
        key="inpNameLast"
        type="text"
        position={classes.lastName}
        placeholder="Last Name"
        name="input-lastName"
      />
      <CheckedInput
        key="inpMail"
        type="text"
        position={classes.mail}
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
        position={classes.password}
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
        position={classes.repeat}
        placeholder="Repeat Password"
        name="input-passwordRepeat"
      />
      <PasswordToggler
        key="toggler-rep"
        individualClass={classes.repeat_toggle}
        setPasswordVisibility={setVisibilityRep}
      />
      <div className={classes.buttonBox}>
        <ButtonOutside
          key="button-back"
          border="white"
          displayText="Back"
          clickMethod={Logic.goBackToLogin}
        />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside
          key="button-register"
          border={Logic.evaluateButtonState()}
          displayText="Continue"
          clickMethod={Logic.handleRegisterRequest.bind(Logic)}
        />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default RegisterForm;
