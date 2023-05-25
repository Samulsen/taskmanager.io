import { redirect } from "react-router-dom";

const authCheck = function () {
  const authStatus = true;
  if (!authStatus) {
    return redirect("/login");
  }
  return null;
};

export default authCheck;
