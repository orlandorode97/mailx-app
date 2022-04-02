import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import labelsService from "services/Labels";
import { Dispatch, SetStateAction } from "react";
import userService from "services/Users";

interface IUserContext {
  user: IUser | undefined;
  setUser?: Dispatch<SetStateAction<IUser | undefined>>;
}

interface IUser {
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
}

const defaultState: IUserContext = {
  user: undefined,
};

export const UserContext = createContext<IUserContext>(defaultState);

export const UserProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<IUser>();

  const getUser = useCallback(async () => {
    const { data } = await userService.getCurrent();
    setUser(data.user);
  }, [setUser]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
