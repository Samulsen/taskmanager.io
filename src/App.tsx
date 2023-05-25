//---------IMPORTS------------\
//__i-libraries______
import React from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
//__i-components_____
import Entrypage from "./components/1-entrypage/Entrypage";
import Loginpage from "./components/2-loginpage/Loginpage";
import Registerpage from "./components/3-registerpage/Registerpage";
import Main from "./components/4-main/Main";
//__i-helpers________
import authCheck from "./util/authCheck";

//---------MAIN---------------\

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>ROOT ROUTE</div>,
  },
  {
    path: "/entry",
    element: <Entrypage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/register",
    element: <Registerpage />,
  },
  {
    path: "/main",
    element: <Main />,
    loader: authCheck,
    children: [
      {
        path: "child1",
        element: <div>CHIDL1</div>,
      },
      {
        path: "child2",
        element: <div>CHIDL1</div>,
      },
    ],
  },
]);

//---------COMPONENT----------\

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

//---------EXPORTS------------\

export default App;
