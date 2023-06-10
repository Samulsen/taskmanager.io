//---------IMPORTS------------\

import { appMetaData } from "../context/DataContext";

//---------MAIN---------------\

const debugLoggerData = function (appMetaData: appMetaData | string) {
  if (appMetaData === "cold") {
    console.log(
      `
%cDataContext evaluates AppMetaData...
%cCurrent State: %cCOLD
%cWaiting for onSnapshot listener initiation...
`,
      "font-weight: bold; color:rgb(21, 255, 181)",
      "color:white",
      "color:orange",
      "color:rgb(255, 224, 146)"
    );
  } else {
    console.log(
      `
%cDataContext evaluates AppMetaData...
%cCurrent State: %cACCESSED
%c${`Name: %c${(appMetaData as appMetaData).firstName} ${
        (appMetaData as appMetaData).lastName
      }
%cBoards: %c${(appMetaData as appMetaData).boardNames.map(([key, value]) => {
        return value;
      })}`}
        `,
      "font-weight: bold; color:rgb(21, 255, 181)",
      "color:white",
      "color: rgb(124, 253, 120)",
      "color:white",
      "color:rgb(247, 104, 206)",
      "color:white",
      "color:rgb(247, 104, 206)"
    );
  }
};

//---------EXPORTS------------\

export default debugLoggerData;
