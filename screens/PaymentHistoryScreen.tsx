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
import RadioButton from '../components/RadioButton';
import { timeCodeOptions } from '../constants/TimeCodeOptions';
import Button from '../components/Button';
import { PaymentItemModel } from '../models/PaymentItem';
import Preloader from '../components/Preloader';
interface PaymentHistoryScreenProps {

}

const PaymentHistoryScreen: React.FC<PaymentHistoryScreenProps> = ({}) => {
  const { loading, customerPayments, setActiveTimecodeOption } = useContext(Context); 
  const openMenuRef = useRef();
  const [isActive, setActive] = useState<null | number>(0);
  const [paymentItems, setPaymentitems] = useState(PaymentItemModel.paymentsList);

  const openMenuHandler = () => {
    openMenuRef?.current?.open();
  }

  const itemTapHandler = (id: number) => {
    setActive(id);
  };

  const setActiveOptionHandler = () => {
    setActiveTimecodeOption(isActive);
  }

  useEffect(() => {
    if (customerPayments && !loading) {
      setPaymentitems(customerPayments);
    }
  })

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
        <Preloader />
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
    marginTop: '15%'
  }
});

export default PaymentHistoryScreen;