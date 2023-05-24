//---------IMPORTS------------\

import classes from "./_Loginpage.module.scss";
//__i-components_____
import Anchor from "../0-independent/anchor/Anchor";
import Logo from "../0-independent/logo/Logo";
import Title from "../0-independent/title/Title";
import LoginForm from "./loginForm/LoginForm";

//---------COMPONENT----------\

const Loginpage = function () {
  return (
    <Anchor>
      <div className={classes.body}>
        <Logo individualClass={classes.logo} animation="noDelay" />
        <Title individualClass={classes.title} />
        <LoginForm />
      </div>
    </Anchor>
  );
};

//---------EXPORTS------------\

export default Loginpage;
