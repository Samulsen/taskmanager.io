//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

//---------COMPONENT----------\

const ProtectedContainer = function () {
  //__c-hooks________
  const navigate = useNavigate();
  //__c-logic________
  const Logic = {
    authCheck() {},
  };

  return <Outlet />;
};

//---------EXPORTS------------\

export default ProtectedContainer;
