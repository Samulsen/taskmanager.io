//---------IMPORTS------------\

import classes from "./_Info.module.scss";
import question from "./question.svg";
import { FC } from "react";

//---------COMPONENT----------\

const Info: FC<{ description: string; position: string }> = function (props) {
  return (
    <div className={`${props.position} ${classes.body}`}>
      <div
        className={classes.helpEffect}
        data-description={props.description}
      ></div>
      <img className={classes.questionmark} src={question} alt="infoUser" />
    </div>
  );
};

//---------EXPORTS------------\

export default Info;
