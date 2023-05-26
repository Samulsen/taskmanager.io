//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContextAnchor } from "./AuthContext";
import { useContext } from "react";

//---------COMPONENT----------\

const ProtectedContainer = function () {
  const navigate = useNavigate();
  const AuthValue = useContext(AuthContextAnchor);

  return <Outlet />;
};

//---------EXPORTS------------\

export default ProtectedContainer;
