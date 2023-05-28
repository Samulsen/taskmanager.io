//---------IMPORTS------------\

import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import timeout from "../../util/timeout";
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
