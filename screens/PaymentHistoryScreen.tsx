import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Layout from '../components/Layout';
import PaymentItem from '../components/PaymentItem';
import { Context } from '../context/ContextProvider';
import Moment from 'moment';
import { Colors } from '../constants/Colors';
interface PaymentHistoryScreenProps {

}

const PaymentHistoryScreen: React.FC<PaymentHistoryScreenProps> = ({}) => {
  const {customerPayments, loading} = useContext(Context); 
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

  useEffect(() => {
    if (customerPayments && !loading) {
      setPaymentitems(customerPayments?.paymentsList);
    }
  }, [customerPayments]);

  return (
    <Layout>
      {paymentItems && !loading ? (
        <View style={{marginVertical: 30}}>
          {paymentItems[0].need !== "" ? (
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
            <View style={{marginTop: '70%'}}>
              <Text style={{color: Colors.textGrey, textAlign: 'center'}}>Інформація про платежі відсутня</Text>
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

  },
});

export default PaymentHistoryScreen;