//---------IMPORTS------------\

//__i-libraries______"
import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
//__i-style__________
import classes from "./_LoginForm.module.scss";
//__i-context________
import { AuthContext } from "../../../context/AuthContext";
//__i-components_____
import PasswordToggler from "../passwordToggler/PasswordToggler";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import InputOutside from "../../0-independent/inputs/outside/InputOutside";

//---------COMPONENT----------\

const LoginForm = function () {
  //__c-hooks________
  const AuthContextLocal = useContext(AuthContext);
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
    getCredentials(userCredential: any) {
      console.log("Logged in: " + userCredential.user.uid);
      AuthContextLocal!.setUserUID(userCredential.user.uid);
      AuthContextLocal!.setAuthState(true);
    },
    getError(error: any) {
      console.error(error.message);
    },
    moveToPrivate() {
      navigate("/authTrue/allTasks");
      return Promise.resolve();
    },
    loginRequest() {
      this.initChain()
        .then(this.signIn)
        .then(this.getCredentials)
        .then(this.moveToPrivate)
        .catch(this.getError);
    },
    registerRedirect() {
      navigate("../register");
    },
    //__NOTE: temp for testing!
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
        <ButtonOutside
          border="green"
          displayText="Login"
          clickMethod={Logic.loginRequest.bind(Logic)}
        />
        <div className={classes.buttonBox_or}>or</div>
        <ButtonOutside
          border="green"
          displayText="Register"
          // clickMethod={Logic.registerRedirect}
          clickMethod={Logic.registerRedirect}
        />
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default LoginForm;
