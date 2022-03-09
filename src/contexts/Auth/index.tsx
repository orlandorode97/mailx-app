import { createContext, Dispatch, SetStateAction } from "react";
import React, { useState } from "react";

interface IAuthError {
  error: string | undefined;
  setError: Dispatch<SetStateAction<string | undefined>>;
}

const defaultState: IAuthError = {
  error: undefined,
  setError: () => {},
};
export const AuthContext = createContext<IAuthError>(defaultState);

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [error, setError] = useState<string>();

  return (
    <AuthContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
