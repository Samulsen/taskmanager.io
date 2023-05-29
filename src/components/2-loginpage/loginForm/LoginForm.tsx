//---------IMPORTS------------\

//__i-libraries______
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
//__i-style__________
import classes from "./_LoginForm.module.scss";
//__i-context________
import { AuthContext } from "../../../context/AuthContext";
//__i-components_____
import PasswordToggler from "../passwordToggler/PasswordToggler";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import LoginErrorMessage from "../loginErrorMessage/LoginErrorMessage";
import { AuthError } from "firebase/auth";

//---------COMPONENT----------\

const LoginForm = function () {
  //__c-hooks________
  const AuthLogic = AuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [passwordVisibility, setVisibility] = useState("password");
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputMail = useRef<HTMLInputElement>(null);
  //__c-logic________
  const Logic = {
    //SECTION______________________: Login
    initChain() {
      return Promise.resolve();
    },
    signIn() {
      let email = inputMail.current!.value;
      let password = inputPassword.current!.value;
      return AuthLogic?.loggin(email, password);
    },
    evaluateErrorState() {
      if (error) {
        return <LoginErrorMessage />;
      }
    },
    getError(error: AuthError) {
      console.error(error.message);
      setError(true);
    },
    moveToPrivate() {
      navigate("/private/allTasks");
      return Promise.resolve();
    },
    //__NOTE: Main function
    loginRequest() {
      this.initChain()
        .then(this.signIn)
        .then(this.moveToPrivate)
        .catch(this.getError);
    },
    //SECTION______________________: Redirection
    registerRedirect() {
      navigate("../register");
    },
  };

  return (
    <div className={classes.body}>
      <input
        ref={inputMail}
        key="inp-mail"
        type="text"
        className={`${classes.input} ${classes.mail}`}
        name="mailInputOutside"
        placeholder="E - Mail"
      />
      <input
        ref={inputPassword}
        key="inp-password"
        className={`${classes.input} ${classes.password}`}
        type={passwordVisibility}
        name="passwordInputOutside"
        placeholder="Password"
      />
      <PasswordToggler
        individualClass={classes.toggler}
        setPasswordVisibility={setVisibility}
      />
      <div className={classes.buttonBox}>
        <ButtonOutside
          border="green"
          displayText="Login"
          clickMethod={Logic.loginRequest.bind(Logic)}
        />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside
          border="green"
          displayText="Register"
          clickMethod={Logic.registerRedirect}
        />
      </div>
      {Logic.evaluateErrorState()}
    </div>
  );
};

//---------EXPORTS------------\

export default LoginForm;
