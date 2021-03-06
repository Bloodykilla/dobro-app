import React, { createContext, useState, useEffect } from 'react';
import { Value } from 'react-native-reanimated';
import { fetchCustomerInfo, fetchCustomerPayments, fetchNeedyPersons } from '../http/Api';
import { NeedyPerson } from '../models/NeedyPerson';
import { PaymentItemModel } from '../models/PaymentItem';
import { PersonInfo } from '../models/Person';

interface ContextProviderProps {

}

export const Context = createContext({
  auth: false,
  needyPerson: [NeedyPerson],
  loading: false,
  storageKey: '',
  customerPayments: PaymentItemModel,
  customerInfo: PersonInfo,
  countHelp: 0,
  activeTimecodeOption: 0,
  chosenCity: null,
  pagination: 12,
  isUpdate: false,
  customerUpdate: false,
  setCustomerUpdate: (value: boolean) => value,
  setChosenCity: (value: string) => value
});

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [storageKey, setStorageKey] = useState('');
  const [needyPerson, setNeedyPerson] = useState([NeedyPerson]);
  const [customerPayments, setCustomerPayment] = useState(PaymentItemModel);
  const [customerInfo, setCustomerInfo] = useState(PersonInfo);
  const [countHelp, setCountHelp] = useState(0);
  const [activeTimecodeOption, setActiveTimecodeOption] = useState(0);
  const [chosenCity, setChosenCity] = useState<null | string>(null);
  const [pagination, setPagination] = useState(12);
  const [isUpdate, setUpdate] = useState(false);
  const [customerUpdate, setCustomerUpdate] = useState(false);

  const getNeedyPersons = async() => {
    try {
      setLoading(true);
      const {data} = await fetchNeedyPersons(storageKey, chosenCity === 'Всі' ? null : chosenCity, pagination);
      if (data) {
        setNeedyPerson(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCutomerPayments = async() => {
    try {
      setLoading(true);
      const {data} = await fetchCustomerPayments(storageKey, activeTimecodeOption);
      if (data) {
        setCustomerPayment(data?.paymentsList);
        setCountHelp(data?.totalPaymentsNumber);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomerInfo = async() => {
    try {
      setLoading(true);
      const {data} = await fetchCustomerInfo(storageKey);
      if (data) {
        setCustomerInfo(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log('Customer info: ', customerInfo, customerUpdate);

  useEffect(() => {
    if (auth) {
      getCutomerPayments();
    }
  }, [activeTimecodeOption, auth, isUpdate]);

  useEffect(() => {
    if (auth) {
      getNeedyPersons();
    }
  }, [chosenCity, auth, isUpdate]);

  useEffect(() => {
    if (auth) {
      getCustomerInfo();
    }
  }, [auth, customerUpdate]);

  return (
    <Context.Provider value={{
      auth,
      setAuth,
      loading,
      setLoading,
      storageKey,
      setStorageKey,
      needyPerson,
      customerPayments,
      setCustomerPayment,
      customerInfo,
      countHelp,
      setCountHelp,
      setActiveTimecodeOption,
      setChosenCity,
      setPagination,
      setUpdate,
      customerUpdate,
      setCustomerUpdate
    }}>
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;