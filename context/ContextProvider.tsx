import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState
} from "react";

export interface IAppContext {
  auth: boolean | null;
  setAuth?: Dispatch<SetStateAction<boolean | null>> | null;
}

export const AppContext = createContext<IAppContext>({
  auth: null,
  setAuth: null,
});

export const ContextProvider = ({
  auth,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [authState, setAuthState] = useState<boolean | null>(false);
  const setAuth = (value: boolean) => {
    setAuthState(value);
  };

  return (
    <AppContext.Provider value={{ auth: authState, setAuth: setAuthState }}>
      {children}
    </AppContext.Provider>
  );
};
