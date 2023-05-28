//---------IMPORTS------------\

import { Outlet } from "react-router-dom";
import Anchor from "../0-independent/anchor/Anchor";

//---------COMPONENT----------\

const Public = function () {
  return (
    <Anchor>
      <Outlet />
    </Anchor>
  );
};

export default Public;
