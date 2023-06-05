//---------IMPORTS------------\

import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Anchor from "../0-independent/anchor/Anchor";
import Loading from "./loader/Loading";
import DataContextProvider from "../../context/DataContext";

//---------COMPONENT----------\

const Private = function () {
  //__c-hooks________

  const navigate = useNavigate();
  const authState = AuthContext()?.authState;

  //__c-logic________

  const Logic = {
    evaluateAuthState() {
      if (authState === "UNEVALUATED") {
        return (
          <Anchor>
            <Loading />
          </Anchor>
        );
      }
      if (authState === true) {
        //__NOTE: show requested route
        return (
          <DataContextProvider>
            <Outlet />
          </DataContextProvider>
        );
      }
      if (authState === false) {
        navigate("/public/login");
        return;
      }
    },
  };

  return <>{Logic.evaluateAuthState()}</>;
};

//---------EXPORTS------------\

export default Private;
