//---------IMPORTS------------\

//__i-libraries______
import React from "react";
import ReactDOM from "react-dom/client";
//__i-style__________
import "./_index.scss";
//__i-components_____
import App from "./App";
import AuthContextProvider from "./context/AuthContext";
import DataContextProvider from "./context/DataContext";

//---------MAIN---------------\

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
