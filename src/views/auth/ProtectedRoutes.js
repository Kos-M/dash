import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function useAuth() {
  const token = cookies.get("auth_token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

const PrivateRoutes = () => {
  const loggedIN = useAuth();
  console.dir(loggedIN);
  return loggedIN ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;
