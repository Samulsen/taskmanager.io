//---------IMPORTS------------\

import classes from "./_MiddleArea.module.scss";
import Logo from "../../0-independent/logo/Logo";
import Title from "../../0-independent/title/Title";

//---------COMPONENT----------\

const MiddleArea = function () {
  return (
    <div className={classes.middle}>
      <Title individualClass={classes.title} />
      <div className={classes.subline}>Welcome, click somewhere to start!</div>
      <Logo individualClass={classes.logo} animation="entrypage"></Logo>
    </div>
  );
};

//---------EXPORTS------------\

export default MiddleArea;
