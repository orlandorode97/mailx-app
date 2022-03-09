import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "contexts/Auth/index";
import { useCookies } from "react-cookie";
import { MAILX_COOKIE } from "constants/auth";
import { MAILX_COOKIE_SUCCESS } from "../../constants/auth";

export const AuthSuccess: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams({});
  const [, setCookie] = useCookies([MAILX_COOKIE, MAILX_COOKIE_SUCCESS]);
  const { setError } = useContext(AuthContext);

  useEffect(() => {
    let cookie = searchParams.get(MAILX_COOKIE_SUCCESS);
    if (!cookie) {
      setError("There was problem trying to sign in.");
      navigate("/login");
    }
    setCookie(MAILX_COOKIE_SUCCESS, cookie);
    navigate("/inbox");
  }, [searchParams, setCookie, setError, navigate]);
  return null;
};
