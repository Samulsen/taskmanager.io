//---------IMPORTS------------\
//__i-libraries______
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//__i-components_____
import Anchor from "./components/0-independent/anchor/Anchor";
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
    element: <Anchor />,
    children: [
      {
        path: "entry",
        element: <Entrypage />,
      },
      {
        index: true,
        path: "login",
        element: <Loginpage />,
      },
      {
        path: "register",
        element: <Registerpage />,
      },
    ],
  },

  {
    path: "/main",
    element: <Main />,
  },
]);

//---------COMPONENT----------\

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

//---------EXPORTS------------\

export default App;
