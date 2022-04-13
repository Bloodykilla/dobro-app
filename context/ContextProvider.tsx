import React, { createContext, useState, useEffect } from 'react';
import { fetchCustomerPayments, fetchNeedyPersons } from '../http/Api';
import { NeedyPerson } from '../models/NeedyPerson';
import { PaymentItem } from '../models/PaymentItem';


interface ContextProviderProps {

}

export const Context = createContext({
  auth: false,
  needyPerson: [NeedyPerson],
  loading: false,
  storageKey: '',
  customerPayments: PaymentItem
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storageKey, setStorageKey] = useState('');
  const [needyPerson, setNeedyPerson] = useState([NeedyPerson]);
  const [customerPayments, setCustomerPayment] = useState(PaymentItem);

  const getNeedyPersons = async() => {
    try {
      setLoading(true);
      const {data} = await fetchNeedyPersons(storageKey, 'Одеса', 12);
      if (data) {
        setNeedyPerson(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getCutomerPayments = async() => {
    try {
      setLoading(true);
      const {data} = await fetchCustomerPayments(storageKey);
      if (data) {
        setCustomerPayment(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNeedyPersons();
    getCutomerPayments();
  }, [auth])

  return (
    <Context.Provider value={{
      auth,
      setAuth,
      loading,
      setLoading,
      storageKey,
      setStorageKey,
      needyPerson,
      customerPayments
    }}>
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;