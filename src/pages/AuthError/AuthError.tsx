import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "contexts/Auth/index";

export const AuthError: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setError } = useContext(AuthContext);
  useEffect(() => {
    let error = searchParams.get("error_message");
    if (error) {
      setError(error);
      navigate("/login");
    }
  }, [searchParams, setError, navigate]);
  return null;
};
