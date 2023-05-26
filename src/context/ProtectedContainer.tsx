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
        console.log(
          "FROM ProtectedContainer Status is= " + AuthValue!.authState
        );
        navigate("../login");
      } else {
        console.log("user logged in, letting through!");
      }
    },
  };

  useEffect(Logic.AuthCheck, [AuthValue!.authState]);

  return <Outlet />;
};

//---------EXPORTS------------\

export default ProtectedContainer;
