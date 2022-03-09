import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { MAILX_COOKIE_SUCCESS } from "../../constants/auth";

const Auth: React.FC<{}> = () => {
  const [cookies] = useCookies([MAILX_COOKIE_SUCCESS]);
  const { pathname } = useLocation();

  if (!cookies.mailx_google_success) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Auth;
