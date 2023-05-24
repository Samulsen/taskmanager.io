//---------IMPORTS------------\

import showSign from "./show.svg";
import unshowSign from "./unshow.svg";

//---------COMPONENT----------\

const PasswordToggler: React.FC<{ drilledClass: string }> = function (props) {
  return (
    <div className={props.drilledClass}>
      <img src={showSign} alt="showSign" />
      {/* <img src={unshowSign} alt="unshowSign" /> */}
    </div>
  );
};

//---------EXPORTS------------\

export default PasswordToggler;
