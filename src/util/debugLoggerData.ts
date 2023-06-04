//---------IMPORTS------------\

import { appMetaData } from "../context/DataContext";

//---------MAIN---------------\

const debugLoggerData = function (appMetaData: appMetaData | string) {
  console.log(
    `
%cDataContext evaluates AppMetaData...
%cCurrent State: %c${appMetaData === "cold" ? "cold" : "accessed"}
%c${
      appMetaData === "cold"
        ? "Waiting for onSnapshot listener initiation!"
        : "Current AppMetaData Values:"
    }
%c${
      appMetaData === "cold"
        ? "continuing..."
        : `Name: ${(appMetaData as appMetaData).firstName} ${
            (appMetaData as appMetaData).lastName
          }
        
        `
    }
`,
    "font-weight: bold; color:rgb(21, 255, 181)",
    "color:white",
    `${appMetaData === "cold" ? "color:orange" : "color: yellowgreen"}`,
    `${appMetaData === "cold" ? "color:rgb(255, 224, 146)" : "color: green"}`,
    "color:white"
  );
};

//---------EXPORTS------------\

export default debugLoggerData;
