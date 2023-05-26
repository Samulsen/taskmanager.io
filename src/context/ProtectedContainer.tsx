//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContextAnchor } from "./AuthContext";
import { useContext, useEffect } from "react";

//---------COMPONENT----------\

const ProtectedContainer = function () {
  //__c-hooks________
  const navigate = useNavigate();
  const AuthValue = useContext(AuthContextAnchor);
  //__c-logic________
  const Logic = {
    AuthCheck() {
      if (AuthValue?.authState === false) {
        navigate("../login");
      }
    },
  };

  useEffect(Logic.AuthCheck, [AuthValue?.authState]);

  return <Outlet />;
};

//---------EXPORTS------------\

export default ProtectedContainer;
