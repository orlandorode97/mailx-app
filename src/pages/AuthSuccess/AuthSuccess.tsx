import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "contexts/Auth/index";
import { useCookies } from "react-cookie";
import { COOKIE_NAME } from "constants/auth";

export const AuthSuccess: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams({});
  const [, setCookie] = useCookies([COOKIE_NAME]);
  const { setError } = useContext(AuthContext);

  useEffect(() => {
    let cookie = searchParams.get(COOKIE_NAME);
    if (!cookie) {
      setError("There was problem trying to sign in.");
      navigate("/login");
    }
    setCookie(COOKIE_NAME, cookie);
    navigate("/inbox");
  }, [searchParams, setCookie, setError, navigate]);
  return null;
};
