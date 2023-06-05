//---------IMPORTS------------\

import classes from "./_Registerpage.module.scss";
import Logo from "../0-independent/logo/Logo";
import Title from "../0-independent/title/Title";
import RegisterForm from "./registerForm/RegisterForm";

//---------COMPONENT----------\

const Registerpage = function () {
  return (
    <div className={classes.body}>
      <Logo animation="noDelay" individualClass={classes.logo} />
      <Title individualClass={classes.title} />
      <RegisterForm />
    </div>
  );
};

//---------EXPORTS------------\

export default Registerpage;
