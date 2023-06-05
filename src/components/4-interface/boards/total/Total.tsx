//---------IMPORTS------------\

import classes from "./_Total.module.scss";
import ButtonOutside from "../../../0-independent/buttons/outside/ButtonOutside";
import { useOutletContext } from "react-router-dom";

//---------COMPONENT----------\

const Total = function () {
  const loggout: () => Promise<void> = useOutletContext();

  return (
    <ButtonOutside border="green" displayText="Logout" clickMethod={loggout} />
  );
};

//---------EXPORTS------------\

export default Total;
