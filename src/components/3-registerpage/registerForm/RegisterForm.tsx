//---------IMPORTS------------\

import classes from "./_RegisterForm.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nameValidator } from "../../../types/types";
import { doc, setDoc } from "firebase/firestore";

//__i-components_____
import { AuthContext } from "../../../context/AuthContext";
import ErrorMessageOutside from "../../0-independent/errorMessageOutside/ErrorMessageOutside";
import useOutsideInput from "../../../hooks/useOutsideInput";
import CheckedInput from "./checkedInput/CheckedInput";
import ButtonOutside from "../../0-independent/buttons/outside/ButtonOutside";
import Info from "./info/Info";
import PasswordToggler from "../../0-independent/passwordToggler/PasswordToggler";
import logCol from "../../../util/logColor";
import { AuthError, UserCredential } from "firebase/auth";
import { db } from "../../../firebase";

//---------MAIN---------------\

//---------COMPONENT----------\

const RegisterForm = function () {
  //__c-hooks________

  const initRegistration = AuthContext()!.register;
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [visbilityInit, setVisibilityInit] = useState("password");
  const [visbilityRep, setVisibilityRep] = useState("password");
  const [formValidity, setValidity] = useState(false);
  const navigate = useNavigate();

  //SECTION______________________: Single Form States + corresponded ref

  const [firstNameValidity, setFirstNameValidity, firstNameRef] =
    useOutsideInput();
  const [lastNameValidity, setLastNameValidity, lastNameRef] =
    useOutsideInput();
  const [mailValidity, setMailValidity, mailRef] = useOutsideInput();
  const [passInitValidity, setInitValidity, passInitRef] = useOutsideInput();
  const [passRepValidity, setRepValidity, passRepRef] = useOutsideInput();

  //__c-logic________

  const Logic = {
    goBackToLogin() {
      navigate("/public/login");
    },
    evaluateButtonState() {
      return formValidity ? "valid" : "invalid";
    },
    evaluateErrorState() {
      return errorMessage ? (
        <ErrorMessageOutside message={errorMessage} />
      ) : (
        <></>
      );
    },
    Registration: {
      Datapool: {
        create(UserCredential: UserCredential) {
          // return new Promise((resolve) => {
          const userMetaData = {
            firstName: firstNameRef.current!.value,
            lastName: lastNameRef.current!.value,
          };
          const userConfigData = { autoDeleteOnDone: false };
          const userBoardsData = { boardNames: ["noBoards"] };
          const uid = UserCredential.user.uid;
          const mainPoolRef = `MainUserDataPool_${uid}`;

          // });
          return Promise.all([
            setDoc(doc(db, mainPoolRef, "UserMetaData"), userMetaData),
            setDoc(doc(db, mainPoolRef, "UserConfig"), userConfigData),
            setDoc(doc(db, mainPoolRef, "UserBoards"), userBoardsData),
          ]);
        },
      },

      allow() {
        logCol("Allow registration!", "green");
        const { mail, password } = {
          mail: mailRef.current!.value,
          password: passInitRef.current!.value,
        };
        initRegistration(mail, password)
          .then(this.Datapool.create)
          .then(this.registrationEnd)
          .catch(this.handleError);
      },
      block() {
        logCol("Form invalid, registration disallowed!", "red");
        setErrorMessage("Form is incomplete... Please fill out all Fields!");
      },
      registrationEnd() {
        logCol("The registration has succesfully finished!", "green");
      },
      handleError(error: AuthError) {
        if (error.message.includes("auth/email-already-in-use")) {
          setErrorMessage("Mail already in use! Change mail and try again!");
          setMailValidity(false);
        } else setErrorMessage(error.message);
      },
      handleRequest() {
        if (formValidity) {
          this.allow();
        } else {
          this.block();
        }
      },
    },
    Valididation: {
      forName(value: string, validator: nameValidator) {
        if (value.trim().length === 0) validator(false);
        else validator(true);
      },
      forMail(value: string, validator: nameValidator) {
        const emailRegEx: RegExp =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegEx.test(value)) validator(true);
        else validator(false);
      },
      forInitPassword(value: string, validator: nameValidator) {
        const passwordRegEx: RegExp = /^(?=.*\d)(?=.*[A-Z])\S{4,}$/;
        if (passwordRegEx.test(value)) {
          validator(true);
          this.forRepPassword(passRepRef.current!.value, setRepValidity);
        } else {
          validator(false);
          this.forRepPassword(passRepRef.current!.value, setRepValidity);
        }
      },
      forRepPassword(value: string, validator: nameValidator) {
        if (value.trim().length === 0) {
          validator(false);
          return;
        }
        if (value === passInitRef.current?.value) validator(true);
        else validator(false);
      },
      forMainForm() {
        if (
          (firstNameValidity &&
            lastNameValidity &&
            mailValidity &&
            passInitValidity &&
            passRepValidity) === true
        )
          setValidity(true);
        else setValidity(false);
      },
    },
  };

  useEffect(() => {
    Logic.Valididation.forMainForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    firstNameValidity,
    lastNameValidity,
    mailValidity,
    passInitValidity,
    passRepValidity,
  ]);

  //__c-invocation___
  return (
    <div className={classes.body}>
      <CheckedInput
        key="inpNameFirst"
        type="text"
        position={classes.firstName}
        placeholder="First Name"
        name="input-firstName"
        ref={firstNameRef}
        inputValidity={firstNameValidity}
        setInputValidity={setFirstNameValidity}
        validityLogic={Logic.Valididation.forName}
      />
      <CheckedInput
        key="inpNameLast"
        type="text"
        position={classes.lastName}
        placeholder="Last Name"
        name="input-lastName"
        ref={lastNameRef}
        inputValidity={lastNameValidity}
        setInputValidity={setLastNameValidity}
        validityLogic={Logic.Valididation.forName}
      />
      <CheckedInput
        key="inpMail"
        type="text"
        position={classes.mail}
        placeholder="E - Mail"
        name="input-mail"
        ref={mailRef}
        inputValidity={mailValidity}
        setInputValidity={setMailValidity}
        validityLogic={Logic.Valididation.forMail}
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
        ref={passInitRef}
        inputValidity={passInitValidity}
        setInputValidity={setInitValidity}
        validityLogic={Logic.Valididation.forInitPassword.bind(
          Logic.Valididation
        )}
      />
      <Info
        key="info-password"
        description="Password must be at least 4 characters long! Contains: 1 number, 1 upper- case letter and no whitespaces!"
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
        ref={passRepRef}
        inputValidity={passRepValidity}
        setInputValidity={setRepValidity}
        validityLogic={Logic.Valididation.forRepPassword}
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
          clickMethod={Logic.Registration.handleRequest.bind(
            Logic.Registration
          )}
        />
      </div>
      {Logic.evaluateErrorState()}
    </div>
  );
};

//---------EXPORTS------------\

export default RegisterForm;
