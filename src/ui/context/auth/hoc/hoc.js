import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoaderSimple } from "ui/shared/loader";
import { AuthContext } from "../provider";

export const ProtectedRoute = ({ children, redirect, isAllowed = true }) => {
  const { isUserLoggedIn, login } = useContext(AuthContext);
  if (!isUserLoggedIn && login) {
    login();
    return <LoaderSimple />;
  }
  if (!isAllowed) {
    return <Navigate to={redirect} />;
  }

  return children ? children : <Outlet />;
};
