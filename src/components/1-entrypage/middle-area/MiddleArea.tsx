//---------IMPORTS------------\

import classes from "./_MiddleArea.module.scss";
import Logo from "../../0-independent/logo/Logo";
import Title from "../../0-independent/title/Title";

//---------COMPONENT----------\

const MiddleArea = function () {
  return (
    <div className={classes.middle}>
      <div className={classes.title}>
        <Title />
      </div>
      <div className={classes.subline}>Welcome, click somewhere to start!</div>
      <div className={classes.logo}>
        <Logo animation="entrypage"></Logo>
      </div>
    </div>
  );
};

//---------EXPORTS------------\

export default MiddleArea;
