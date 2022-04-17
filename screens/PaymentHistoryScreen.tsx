import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Layout from '../components/Layout';
import PaymentItem from '../components/PaymentItem';
import { Context } from '../context/ContextProvider';
import Moment from 'moment';
import { Colors } from '../constants/Colors';
import TextButton from '../components/TextButton';
import ModalMenu from '../components/ModalMenu';
import { FontSize } from '../constants/fontSize';
import { fetchCustomerPayments } from '../http/Api';
import RadioButton from '../components/RadioButton';
import { timeCodeOptions } from '../constants/TimeCodeOptions';
import Button from '../components/Button';
interface PaymentHistoryScreenProps {

}

const PaymentHistoryScreen: React.FC<PaymentHistoryScreenProps> = ({}) => {
  const { loading, setLoading, storageKey } = useContext(Context); 
  const openMenuRef = useRef();
  const [isActive, setActive] = useState<null | number>(0);
  const [activeMenuOption, setActiveMenuOption] = useState<null | number>(null);
  const [paymentItems, setPaymentitems] = useState([
    {
      dateTime: '',
      need: "",
      person: {
        fName: '',
        pName: '',
        sName: '',
      },
      sum: 0,
    }
  ]);

  const getCutomerPayments = async() => {
    try {
      setLoading(true);
      const {data} = await fetchCustomerPayments(storageKey, activeMenuOption);
      if (data) {
        setPaymentitems(data?.paymentsList);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const openMenuHandler = () => {
    openMenuRef?.current?.open();
  }

  const itemTapHandler = (id: number) => {
    setActive(id);
  };

  const setActiveOptionHandler = () => {
    setActiveMenuOption(isActive);
  }

  useEffect(() => {
    getCutomerPayments()
  }, [activeMenuOption]);

  console.log('paymenT ITEMS: ', paymentItems);

  return (
    <Layout>
      {paymentItems && !loading ? (
        <View style={styles.container}>
          <View style={styles.textButtonContainer}>
            <TextButton
              text='Обрати період' 
              buttonAction={() => openMenuHandler()} 
            />
            <ModalMenu modalRef={openMenuRef}>
              <View style={{paddingHorizontal: 32, marginTop: 30, flex: 1}}>
                {timeCodeOptions.map((item, id) => (
                  <RadioButton
                    key={id}
                    value={item.value}
                    label={item.label}
                    isActive={isActive === id ? true : false}
                    onSelect={() => itemTapHandler(id)}
                  />
                ))}
                <Button
                  style={styles.filterButton}
                  label='Фільтр' 
                  buttonAction={() => setActiveOptionHandler()} 
                />
              </View>
            </ModalMenu>
          </View>
          {paymentItems.length > 0 ? (
            <View>
            {paymentItems.map((item, index) => (
              <PaymentItem 
                needLabel={item.need}
                name={item.person.fName}
                surname={item.person.sName}
                patronymic={item.person.pName}
                sum={item.sum}
                date={Moment(item.dateTime).format('YY.MM.DD')}
                key={index}
              />
              ))
            }
            </View>
          )
          :
            <View style={{marginTop: Dimensions.get('window').height / 3}}>
              <Text
                style={styles.noPaymentText}>
                  Інформація про платежі відсутня
              </Text>
            </View>
          }

        </View>
      )
      :
        null
      }

    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{
    marginVertical: 15
  },
  textButtonContainer: {
    marginBottom: 15,
    alignSelf: 'flex-end'
  },
  noPaymentText: {
    color: Colors.textGrey,
    textAlign: 'center', 
    fontSize: FontSize.label
  },
  filterButton: {
    marginTop: '20%'
  }
});

export default PaymentHistoryScreen;