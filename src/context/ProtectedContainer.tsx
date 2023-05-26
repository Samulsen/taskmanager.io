//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext, useEffect } from "react";

//---------COMPONENT----------\

const ProtectedContainer = function () {
  //__c-hooks________
  const navigate = useNavigate();
  const AuthValue = useContext(AuthContext);
  //__c-logic________
  const Logic = {
    AuthCheck() {
      if (AuthValue!.authState === false) {
        console.error("Refused access!");
        navigate("../login");
      } else {
        console.log("Acces granted for User!");
      }
    },
  };

  useEffect(Logic.AuthCheck, [AuthValue!.authState]);

  return <Outlet />;
};

//---------EXPORTS------------\

export default ProtectedContainer;
