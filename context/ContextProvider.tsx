import React, { createContext, useState, useEffect } from 'react';
import { } from '../http/Api';


interface ContextProviderProps {

}

export const Context = createContext({
  auth: false,
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storageKey, setStorageKey] = useState('');

  return (
    <Context.Provider value={{
      auth,
      setAuth,
      loading,
      setLoading,
      storageKey,
      setStorageKey
    }}>
        {children}
    </Context.Provider>
  );
}
export default ContextProvider;