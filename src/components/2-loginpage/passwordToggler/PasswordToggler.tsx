//---------IMPORTS------------\

import { useState } from "react";
import classes from "./_PasswordToggle.module.scss";
import showSign from "./show.svg";
import unshowSign from "./unshow.svg";

//---------COMPONENT----------\

const PasswordToggler: React.FC<{ individualClass: string }> = function (
  props
) {
  const [visibility, setVisibility] = useState(false);

  const Logic = {
    evaluateVisibility() {
      if (visibility) {
        return <img src={unshowSign} alt="unshowSign" />;
      } else {
        return <img src={showSign} alt="showSign" />;
      }
    },
    toogleVisibility() {
      if (visibility) {
        setVisibility(false);
      } else {
        setVisibility(true);
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
