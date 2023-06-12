//---------IMPORTS------------\

import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
//__i-components_____
import Anchor from "../0-independent/anchor/Anchor";
import Loading from "./loader/Loading";

//---------COMPONENT----------\

const Public = function () {
  //__c-hooks________

  const authValues = AuthContext();
  const navigate = useNavigate();

  //__c-logic________
  const Logic = {
    evaluateAuthState() {
      if (authValues?.authState === "UNEVALUATED") {
        return (
          <Anchor>
            <Loading />
          </Anchor>
        );
      }
      if (authValues?.authState === true) {
        navigate(`/private/${authValues?.userObject?.uid}/total`);
        return;
      }
      if (authValues?.authState === false) {
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
