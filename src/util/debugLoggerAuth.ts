//---------MAIN---------------\
const debugLoggerAuth = function (authState: boolean, userUID: string) {
  console.log(
    `
      %cAuth Context was (re-)executed!
      %cCurrent Auth State: %c${authState}
      %cCurrent User UID: %c${userUID}
      `,
    "font-weight: bold; color:yellow",
    "color:white",
    `${
      authState
        ? "font-weight: bold; color:green"
        : "font-weight: bold; color:red"
    }`,
    "color:white",
    `${
      userUID === "anonymous"
        ? "font-weight: bold; color:grey"
        : "font-weight: bold; color:yellowgreen"
    }`
  );
};
//---------EXPORTS------------\
export default debugLoggerAuth;
