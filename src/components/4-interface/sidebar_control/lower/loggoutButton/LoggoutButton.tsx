//---------IMPORTS------------\

import { AuthContext } from "../../../../../context/AuthContext";
import classes from "./_LoggoutButton.module.scss";
import icon from "./loggoutIcon.svg";
import LoggoutConfirmPop from "./LoggoutConfirmPop/LoggoutConfirmPop";

//---------COMPONENT----------\

const LoggoutButton = function () {
  const loggout = AuthContext()!.loggout;

  return (
    <div className={classes.body}>
      <img src={icon} alt="loggoutButtonIcon" onClick={loggout} />
      <LoggoutConfirmPop />
    </div>
  );
};

//---------EXPORTS------------\

export default LoggoutButton;

//SECTION______________________: For dev

// //---------IMPORTS------------\

// import { AuthContext } from "../../../../../context/AuthContext";
// import classes from "./_LoggoutButton.module.scss";
// import icon from "./loggoutIcon.svg";
// import LoggoutConfirmPop from "./LoggoutConfirmPop/LoggoutConfirmPop";

// //---------COMPONENT----------\

// const LoggoutButton = function () {
//   const loggout = AuthContext()!.loggout;

//   return (
//     <div className={classes.body}>
//       <img src={icon} alt="loggoutButtonIcon" onClick={loggout} />

//     </div>
//   );
// };

// //---------EXPORTS------------\

// export default LoggoutButton;
