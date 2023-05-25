import { redirect } from "react-router-dom";

const authCheck = function () {
  const authStatus = false;
  if (!authStatus) return redirect("/login");
  return true;
};

export default authCheck;
