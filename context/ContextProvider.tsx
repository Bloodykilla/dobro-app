import React, { createContext, useState, useEffect } from 'react';
import { fetchNeedyPersons } from '../http/Api';
import { NeedyPerson } from '../models/NeedyPerson';


interface ContextProviderProps {

}

export const Context = createContext({
  auth: false,
  needyPerson: [NeedyPerson],
  loading: false,
  storageKey: ''
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storageKey, setStorageKey] = useState('');
  const [needyPerson, setNeedyPerson] = useState([NeedyPerson]);

  const getNeedyPersons = async() => {
    try {
      setLoading(true);
      const {data} = await fetchNeedyPersons(storageKey, 'Одеса', 2);
      if (data) {
        setNeedyPerson(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNeedyPersons()
  }, [auth])

  return (
    <Context.Provider value={{
      auth,
      setAuth,
      loading,
      setLoading,
      storageKey,
      setStorageKey,
      needyPerson
    }}>
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;