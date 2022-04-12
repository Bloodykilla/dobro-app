import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../components/Button';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { payForNeeds } from '../http/Api';
import { NeedyPerson } from '../models/NeedyPerson';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigation/StackNavigaton';
import { useNavigation } from '@react-navigation/native';
interface PaymentScreenProps {
 route : {
   params: {
    person: typeof NeedyPerson;
    selectedOption: number;
   }
 };
 mainStack: StackNavigationProp<HomeStackParamList>;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ route, mainStack }) => {
  const person = route?.params?.person;
  const activeNeedOption= route?.params?.selectedOption;
  const [mount, setMount] = useState('');
  const { storageKey, loading } = useContext(Context);
  const navigaiton = useNavigation<typeof mainStack>();

  console.log(person?.currentNeed?.id);

  const payForCurrentNeed = async() => {
    let needId = activeNeedOption === 1 ? person?.currentNeed?.id: person?.basketNeed?.id;
    try {
      if (+mount > 0) {
        const {data} = await payForNeeds(needId, +mount, storageKey);
        if (data === 'Success') {
          navigaiton.navigate('Thanks');
        } else {
          Alert.alert('Сталася помилка! Спробуйте знову.');
        }
      } else {
        Alert.alert('Введіть коректну суму поповнення.')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.warningText}>
          Памʼятайте! Кожен раз, коли ви 
          допомагаєте нужденній людині, 
          ви отримуєте бали, котрі потім 
          можна буде потратити на сервіси 
          наших партнерів.
        </Text>
      </View>
      <View style={styles.paymentCardContainer}>
        <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
          <View>
          {person?.imageLink !== '' && !loading ? (
            <Image
              source={{uri: person?.imageLink}}
              style={styles.image}
            /> 
          )
          : 
            null
          }
          </View>
          <View style={{paddingLeft: 20}}>
            <View style={styles.initialsContainer}>
              <Text
                style={[styles.needyName, {maxWidth: Dimensions.get('window').width - 150}]}
                >
                  {person?.sName} {person?.fName} {person?.pName}, {person?.age} роки
              </Text>
            </View>
            <View style={{paddingVertical: 4}}>
              <Text style={{maxWidth: Dimensions.get('window').width - 150}}>
                {activeNeedOption === 1 ? 
                person?.currentNeed?.descShort :
                person?.basketNeed?.descShort}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.restContainer}>
        <Text style={styles.restText}>Залишилося зібрати: {activeNeedOption === 1 ? 
          person?.currentNeed?.goal - person?.currentNeed?.currentSum :
          person?.basketNeed?.goal - person?.basketNeed?.currentSum
          } грн
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput  
          placeholderTextColor="#BEBEBE"
          placeholder='Введіть суму'
          keyboardType='numeric'
          style={styles.input}
          value={mount}
          onChangeText={setMount} 
        />
      </View>
      <View>
        <Button
          label='Сплатити' 
          buttonAction={() => payForCurrentNeed()} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
  paymentCardContainer: {
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 9,
  },
  input: {
    padding: 12,
    fontSize: FontSize.label,
    textAlign: 'center',
    backgroundColor: '#F5F0F0',
    borderRadius: 8
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8
  },
  needyName: {
    textAlign: 'left',
    fontSize: FontSize.regular,
    fontWeight: '500',
    maxWidth: 280
  },
  inputContainer: {
    marginBottom: 40
  },
  initialsContainer: {
    paddingVertical: 4
  },
  warningText: {
    textAlign: 'center',
    fontWeight: '400', 
    fontSize: FontSize.label, 
    marginVertical: 30,
    color: Colors.black
  },
  restText: {
    fontSize: FontSize.label,
    color: Colors.black,
    textAlign: 'center',
  },
  restContainer: {
    marginTop: 40,
    marginBottom: 20
  }
});

export default PaymentScreen;