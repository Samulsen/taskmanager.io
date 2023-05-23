//---------IMPORTS------------\

import { Form } from "react-router-dom";
import classes from "./_Loginpage.module.scss";
//__i-components_____
import Anchor from "../0-independent/anchor/Anchor";
import Logo from "../0-independent/logo/Logo";
import Title from "../0-independent/title/Title";

//---------MAIN---------------\

//__m-related_______ - Action

//---------COMPONENT----------\

const Loginpage = function () {
  return (
    <Anchor>
      <div className={classes.body}>
        <Logo individualClass={classes.logo} animation="noDelay" />

        <div className={classes.title}>
          <Title individualClass={classes.title} />
        </div>
      </div>
    </Anchor>
  );
};

//---------EXPORTS------------\

export default Loginpage;
