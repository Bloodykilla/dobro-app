import React, { createContext, PropsWithChildren, useState } from "react";

export interface IAppContext {
  auth: boolean;
  setAuth?: (value: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  auth: false,
});

export const AppContextProvider = ({
  auth,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [authState, setAuthState] = useState<boolean>(auth);
  const setAuth = (value: boolean) => {
    setAuthState(value);
  };

  return (
    <AppContext.Provider value={{ auth: authState, setAuth }}>
      {children}
    </AppContext.Provider>
  );
};
