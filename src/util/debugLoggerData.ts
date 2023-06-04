//---------IMPORTS------------\

import { appMetaData } from "../context/DataContext";

//---------MAIN---------------\

const debugLoggerData = function (appMetaData: appMetaData | string) {
  if (appMetaData === "cold") {
    console.log(
      `
%cDataContext evaluates AppMetaData...
%cCurrent State: %c${appMetaData === "cold" ? "COLD" : "ACCESSED"}
%c${
        appMetaData === "cold"
          ? "Waiting for onSnapshot listener initiation!"
          : "Current AppMetaData Values:"
      }
%c${
        appMetaData === "cold"
          ? "continuing..."
          : `Name: %c${(appMetaData as appMetaData).firstName} ${
              (appMetaData as appMetaData).lastName
            }
%cBoards: %c${(appMetaData as appMetaData).boardNames}
                `
      }
        `,
      "font-weight: bold; color:rgb(21, 255, 181)",
      "color:white",
      `${appMetaData === "cold" ? "color:orange" : "color: yellowgreen"}`,
      `${
        appMetaData === "cold"
          ? "color:rgb(255, 224, 146)"
          : "color: rgb(124, 253, 120)"
      }`,
      "color:white"
    );
  } else {
    console.log(
      `
%cDataContext evaluates AppMetaData...
%cCurrent State: %c${appMetaData === "cold" ? "COLD" : "ACCESSED"}
%c${
        appMetaData === "cold"
          ? "Waiting for onSnapshot listener initiation!"
          : "Current AppMetaData Values:"
      }
%c${
        appMetaData === "cold"
          ? "continuing..."
          : `Name: %c${(appMetaData as appMetaData).firstName} ${
              (appMetaData as appMetaData).lastName
            }
%cBoards: %c${(appMetaData as appMetaData).boardNames}`
      }
        `,
      "font-weight: bold; color:rgb(21, 255, 181)",
      "color:white",
      `${appMetaData === "cold" ? "color:orange" : "color: yellowgreen"}`,
      `${
        appMetaData === "cold"
          ? "color:rgb(255, 224, 146)"
          : "color: rgb(124, 253, 120)"
      }`,
      "color:white",
      "color:rgb(247, 104, 206)",
      "color:white",
      "color:rgb(247, 104, 206)"
    );
  }
};

//---------EXPORTS------------\

export default debugLoggerData;
