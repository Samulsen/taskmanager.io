import { redirect } from "react-router-dom";

const validateAuth = function () {
  let authStatus = false;

  if (!authStatus) return redirect("/login");

  return null;
};

export default validateAuth;
