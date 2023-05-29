//---------IMPORTS------------\

import classes from "./_Loading.module.scss";
import loaderAuth from "./loaderAuth.svg";

//---------COMPONENT----------\

const Loading = function () {
  return (
    <div className={classes.body}>
      <div className={classes.message}>loading</div>
      <img className={classes.logo} src={loaderAuth} alt="loaderAuthEval" />
    </div>
  );
};

//---------EXPORTS------------\

export default Loading;
