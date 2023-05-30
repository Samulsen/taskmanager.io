//---------IMPORTS------------\

import classes from "./_RegisterForm.module.scss";
import CheckedInput from "./checkedInput/CheckedInput";

//---------COMPONENT----------\

const RegisterForm = function () {
  return (
    <div className={classes.body}>
      <CheckedInput
        key="inpName"
        type="text"
        individualClass={classes.firstName}
        placeholder="First Name"
        name="input-firstName"
      />
    </div>
  );
};

//---------EXPORTS------------\

export default RegisterForm;
