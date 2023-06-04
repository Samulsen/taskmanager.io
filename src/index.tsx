//---------IMPORTS------------\

//__i-libraries______
import React from "react";
import ReactDOM from "react-dom/client";
//__i-style__________
import "./_index.scss";
//__i-components_____
import App from "./App";
import AuthContextProvider from "./context/AuthContext";

//---------MAIN---------------\

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
