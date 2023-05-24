//---------IMPORTS------------\

import classes from "./_PasswordToggle.module.scss";
import showSign from "./show.svg";
import unshowSign from "./unshow.svg";

//---------COMPONENT----------\

const PasswordToggler: React.FC<{ individualClass: string }> = function (
  props
) {
  return (
    <div className={classes.body + " " + props.individualClass}>
      <img src={showSign} alt="showSign" />
      {/* <img src={unshowSign} alt="unshowSign" /> */}
    </div>
  );
};

//---------EXPORTS------------\

export default PasswordToggler;
