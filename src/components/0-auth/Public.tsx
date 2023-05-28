//---------IMPORTS------------\

import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
//__i-components_____
import Anchor from "../0-independent/anchor/Anchor";
import Loading from "./loader/Loading";

//---------COMPONENT----------\

const Public = function () {
  const authState = AuthContext()?.authState;
  const navigate = useNavigate();

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
        navigate("/private/allTasks");
        return;
      }
      if (authState === false) {
        //__NOTE: show requested route
        return (
          <Anchor>
            <Outlet />
          </Anchor>
        );
      }
    },
  };
  return <>{Logic.evaluateAuthState()}</>;
};

export default Public;
