//---------IMPORTS------------\
//__i-libraries______
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//__i-components_____
import Public from "./components/0-auth/Public";
import Private from "./components/0-auth/Private";
import Entrypage from "./components/1-entrypage/Entrypage";
import Loginpage from "./components/2-loginpage/Loginpage";
import Registerpage from "./components/3-registerpage/Registerpage";
import Main from "./components/4-main/Main";

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
    children: [{ path: "allTasks", element: <Main /> }],
  },
]);

//---------COMPONENT----------\

function App() {
  return <RouterProvider router={router} />;
}

//---------EXPORTS------------\

export default App;
