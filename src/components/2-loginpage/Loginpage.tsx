//---------IMPORTS------------\

import { Form } from "react-router-dom";
import classes from "./_Loginpage.module.scss";
import Anchor from "../0-independent/anchor/Anchor";

//---------MAIN---------------\

//__m-related_______ - Action

//---------COMPONENT----------\

const Loginpage = function () {
  return (
    <Anchor>
      <div className={classes.body}>
        <div className={classes.logo}></div>
        <div className={classes.title}></div>
        <Form className={classes.form} method="post">
          {/* Username Input */}
          {/* Passowrd Input */}
          <div className={classes.form__buttonBox}>
            {/* Login */}
            <div className={classes.form__buttonBox_or}></div>
            {/* Register */}
          </div>
        </Form>
      </div>
    </Anchor>
  );
};

//---------EXPORTS------------\

export default Loginpage;
