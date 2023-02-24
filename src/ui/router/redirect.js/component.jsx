const { UserAccountContext } = require("ui/context/UserAccount");
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export const Redirect = () => {
  const { user } = useContext(UserAccountContext);
  console.log(user.firstConnect);
  if (user.firstConnect) {
    return <Navigate to="/portail/mon-compte" />;
  }

  return <Navigate to="/portail/mes-enquetes" />;
};
