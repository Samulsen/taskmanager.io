//---------IMPORTS------------\

//__i-libraries______"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
//__i-style__________
import classes from "./_LoginForm.module.scss";
//__i-components_____
import PasswordToggler from "../passwordToggler/PasswordToggler";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import InputOutside from "../../0-independent/inputs/outside/InputOutside";

//---------COMPONENT----------\

const LoginForm = function () {
  //__c-hooks________
  const navigate = useNavigate();
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputMail = useRef<HTMLInputElement>(null);

  //__c-logic________
  const Logic = {
    loginRequest() {
      console.log("request to login was send!");
      console.log(inputPassword.current);
      console.log(inputMail.current);
    },
    registerRedirect() {
      navigate("../register");
    },
  };

  return (
    <div className={classes.body}>
      <InputOutside
        ref={inputMail}
        key="inp-mail"
        individualClass={classes.input + " " + classes.mail}
        type="text"
        name="mailInputOutside"
        placeholder="E - Mail"
      />
      <InputOutside
        ref={inputPassword}
        key="inp-password"
        individualClass={classes.input + " " + classes.password}
        //__NOTE: Temp "type" later deffault password
        type="type"
        name="passwordInputOutside"
        placeholder="Password"
      />
      <PasswordToggler individualClass={classes.toggler} />
      <div className={classes.buttonBox}>
        {/* //__NOTE: Button receives another click handler! */}
        <ButtonOutside
          border="green"
          displayText="Login"
          clickMethod={Logic.loginRequest}
        />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside
          border="green"
          displayText="Register"
          clickMethod={Logic.registerRedirect}
        />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default LoginForm;
