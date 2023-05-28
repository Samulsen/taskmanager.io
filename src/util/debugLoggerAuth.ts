import { User } from "firebase/auth";

//---------MAIN---------------\

const debugLoggerAuth = function (userObject: User | null) {
  console.log(
    `
%conAuthStateChanged evaluates a change...
%cCurrent Auth State: %c${userObject ? true : false}
%cCurrent User UID: %c${userObject?.email}
      `,
    "font-weight: bold; color:yellow",
    "color:white",
    `${userObject ? "color:green" : "color:red"}`,
    "color:white",
    `${userObject ? "color:yellowgreen" : "color:grey"}`
  );
};
//---------EXPORTS------------\
export default debugLoggerAuth;
