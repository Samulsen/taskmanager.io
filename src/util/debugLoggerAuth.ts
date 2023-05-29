import { User } from "firebase/auth";

//---------MAIN---------------\

const debugLoggerAuth = function (
  userObject: User | null,
  authState: string | boolean
) {
  console.log(
    `
%conAuthContext evaluates AuthState
%cCurrent Auth State: %c${
      typeof authState === "string" ? "UNEVALUATED" : authState ? true : false
    }
%cCurrent User Mail: %c${userObject?.email}
      `,
    "font-weight: bold; color:yellow",
    "color:white",
    `${
      typeof authState === "string"
        ? "color:burlywood"
        : userObject
        ? "color:green"
        : "color:red"
    }`,
    "color:white",
    `${userObject ? "color:yellowgreen" : "color:grey"}`
  );
};
//---------EXPORTS------------\
export default debugLoggerAuth;
