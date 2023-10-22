import { NextPage } from "next";
import React, { ReactNode, createContext, useState } from "react";

//Context är för globala variablar

interface UserProviderProps {
  children: ReactNode;
}

//Properties
interface UserContextProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

//Default
const intialUserContext: UserContextProps = {
  username: "",
  password: "",
  setUsername: () => {},
  setPassword: () => {},
};

export const MyContext = createContext<UserContextProps>(intialUserContext);

//Finalize
const MyContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Connect
  const contextValue: UserContextProps = {
    username,
    password,
    setUsername: (username: string) => setUsername(username),
    setPassword: (password: string) => setPassword(password),
  };

  return <MyContext.Provider value={contextValue} children={children} />;
};

export default MyContextProvider;
