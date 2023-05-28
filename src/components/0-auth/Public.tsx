//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Anchor from "../0-independent/anchor/Anchor";

//---------COMPONENT----------\

const Public = function () {
  const coldState = AuthContext()?.coldState;

  if (coldState === "cold") {
    console.log("checking the cold state");
    return <></>;
  } else {
    console.log("check done! result= " + coldState);
    return (
      <Anchor>
        <Outlet />
      </Anchor>
    );
  }
};

export default Public;
