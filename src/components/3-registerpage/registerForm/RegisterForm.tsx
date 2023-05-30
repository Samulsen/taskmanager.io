//---------IMPORTS------------\

import classes from "./_RegisterForm.module.scss";
import CheckedInput from "./checkedInput/CheckedInput";
import { useRef } from "react";

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
    </div>
  );
};

//---------EXPORTS------------\

export default RegisterForm;
