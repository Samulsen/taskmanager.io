//---------IMPORTS------------\

//__i-libraries______"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
//__i-style__________
import classes from "./_LoginForm.module.scss";
//__i-context________
import { AuthContextAnchor } from "../../../context/AuthContext";
//__i-components_____
import PasswordToggler from "../passwordToggler/PasswordToggler";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import InputOutside from "../../0-independent/inputs/outside/InputOutside";

//---------MAIN---------------\

// TODO: make interface for firebase error and user credentials object

type userObject = {
  user: {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: object;
    stsTokenManager: {
      refreshToken: string;
      accessToken: string;
      expirationTime: number;
    };
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  };
};

//---------COMPONENT----------\

const LoginForm = function () {
  //__c-hooks________
  const navigate = useNavigate();
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputMail = useRef<HTMLInputElement>(null);

  //__c-logic________
  const Logic = {
    initChain() {
      return Promise.resolve("test of promise chain !");
    },
    signIn() {
      let email = inputMail.current!.value;
      let password = inputPassword.current!.value;
      return signInWithEmailAndPassword(auth, email, password);
    },
    getCredential(userCredential: any) {
      console.log(userCredential.user);
    },
    getError(error: any) {
      console.error(error.message);
    },
    loginRequest() {
      this.initChain()
        .then(this.signIn)
        .then(this.getCredential)
        .catch(this.getError);
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
          clickMethod={Logic.loginRequest.bind(Logic)}
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
