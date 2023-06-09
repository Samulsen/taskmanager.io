//---------IMPORTS------------\
//__i-libraries______
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//__i-components_____
//Public Routes
import Public from "./components/0-auth/Public";
import Entrypage from "./components/1-entrypage/Entrypage";
import Loginpage from "./components/2-loginpage/Loginpage";
import Registerpage from "./components/3-registerpage/Registerpage";
//Private Routes
import Private from "./components/0-auth/Private";
import Interface from "./components/4-interface/Interface";
import Total from "./components/4-interface/board_area/boards/total/Total";
import Dynamic from "./components/4-interface/board_area/boards/dynamic/Dynamic";

//---------MAIN---------------\

const router = createBrowserRouter([
  {
    path: "/public",
    element: <Public />,
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
    path: "/private",
    element: <Private />,
    children: [
      {
        path: ":uid",
        element: <Interface />,
        children: [
          {
            path: "total",
            element: <Total />,
          },
          //__NOTE: if something does not work, resort to ":boardID"
          { path: "board/:boardID", element: <Dynamic /> },
        ],
      },
    ],
  },
]);

//---------COMPONENT----------\

function App() {
  return <RouterProvider router={router} />;
}

//---------EXPORTS------------\

export default App;
