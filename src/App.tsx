//---------IMPORTS------------\
//__i-libraries______
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//__i-context________
import AuthContext from "./context/AuthContext";
//__i-components_____
import Anchor from "./components/0-independent/anchor/Anchor";
import ProtectedContainer from "./context/ProtectedContainer";
import Entrypage from "./components/1-entrypage/Entrypage";
import Loginpage from "./components/2-loginpage/Loginpage";
import Registerpage from "./components/3-registerpage/Registerpage";
import Main from "./components/4-main/Main";

//---------MAIN---------------\

const router = createBrowserRouter([
  {
    path: "/",
    element: <Anchor />,
    children: [
      {
        path: "/entry",
        element: <Entrypage />,
      },
      {
        index: true,
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/register",
        element: <Registerpage />,
      },
    ],
  },
  {
    path: "/authTrue",
    element: <ProtectedContainer />,
    children: [
      { path: "allTasks", element: <Main /> },
      { path: "board-1", element: <div>board-1</div> },
    ],
  },
]);

//---------COMPONENT----------\

function App() {
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}

//---------EXPORTS------------\

export default App;
