//---------IMPORTS------------\

import { Outlet } from "react-router-dom";

//---------COMPONENT----------\

const Private = function () {
  // //__c-hooks________
  // const navigate = useNavigate();
  // //__c-logic________
  // const Logic = {
  //   authCheck() {},
  // };

  return <Outlet />;
};

//---------EXPORTS------------\

export default Private;
