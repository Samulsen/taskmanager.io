//---------IMPORTS------------\

import { useState } from "react";
import classes from "./_PasswordToggle.module.scss";
import showSign from "./show.svg";
import unshowSign from "./unshow.svg";

//---------COMPONENT----------\

const PasswordToggler: React.FC<{
  individualClass: string;
  setPasswordVisibility: any;
}> = function (props) {
  const [visibility, setVisibility] = useState(false);

  const Logic = {
    evaluateVisibility() {
      if (visibility) {
        return (
          <img className={classes.scale} src={unshowSign} alt="unshowSign" />
        );
      } else {
        return <img className={classes.scale} src={showSign} alt="showSign" />;
      }
    },
    toogleVisibility() {
      if (visibility) {
        setVisibility(false);
        props.setPasswordVisibility("password");
      } else {
        setVisibility(true);
        props.setPasswordVisibility("text");
      }
    },
  };

  return (
    <div
      className={classes.body + " " + props.individualClass}
      onClick={Logic.toogleVisibility}
    >
      {Logic.evaluateVisibility()}
    </div>
  );
};

//---------EXPORTS------------\

export default PasswordToggler;
