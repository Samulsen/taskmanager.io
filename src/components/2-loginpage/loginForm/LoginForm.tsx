//---------IMPORTS------------\

//__i-libraries______
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
//__i-style__________
import classes from "./_LoginForm.module.scss";
//__i-context________
import { AuthContext } from "../../../context/AuthContext";
//__i-components_____
import PasswordToggler from "../../0-independent/passwordToggler/PasswordToggler";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import ErrorMessageOutside from "../../0-independent/errorMessageOutside/ErrorMessageOutside";
import { AuthError, UserCredential } from "firebase/auth";

//---------COMPONENT----------\

const LoginForm = function () {
  //__c-hooks________

  const AuthLogic = AuthContext();
  const navigate = useNavigate();
  const [errorMessage, setMessage] = useState<null | string>(null);
  const [passwordVisibility, setVisibility] = useState("password");
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputMail = useRef<HTMLInputElement>(null);

  //__c-logic________

  const Logic = {
    //SECTION______________________: Login
    initChain() {
      return Promise.resolve();
    },
    signIn(): Promise<UserCredential> {
      let email = inputMail.current!.value;
      let password = inputPassword.current!.value;
      return AuthLogic!.loggin(email, password);
    },
    evaluateErrorState() {
      return errorMessage ? (
        <ErrorMessageOutside message={errorMessage} />
      ) : (
        <></>
      );
    },
    getError(error: AuthError) {
      if (error.message.includes("auth/invalid-email")) {
        setMessage("Invalid Credentials!");
      } else setMessage(error.message);
      console.error(error.message);
    },
    moveToPrivate(UserCredential: UserCredential) {
      //__NOTE:not necessary because of immediate state change
      // navigate(`/private/${UserCredential.user.uid}/total`);
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
        type="text"
        className={`${classes.input} ${classes.mail}`}
        name="mailInputOutside"
        placeholder="E - Mail"
      />
      <input
        ref={inputPassword}
        className={`${classes.input} ${classes.password}`}
        type={passwordVisibility}
        name="passwordInputOutside"
        placeholder="Password"
      />
      <PasswordToggler
        key="password-toggler"
        individualClass={classes.toggler}
        setPasswordVisibility={setVisibility}
      />
      <div className={classes.buttonBox}>
        <ButtonOutside
          key="button-login"
          border="green"
          displayText="Login"
          clickMethod={Logic.loginRequest.bind(Logic)}
        />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside
          key="button-register"
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
