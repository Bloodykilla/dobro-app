import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import BoldText from '../components/BoldText';
import Input from '../components/Input';
import PhoneInput from '../components/PhoneInput'
import { FontSize } from '../constants/fontSize';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigation/AuthStackNavigation';
import Layout from '../components/Layout';
import { Api } from '../constants/ApiUrl';
import axios from 'axios';
import ErrorText from '../components/ErrorText';
import { Context } from '../context/ContextProvider';
import { emailValidation } from '../constants/emailRegex';
import Preloader from '../components/Preloader';
import { ScrollView } from 'react-native-gesture-handler';

interface RegistrationScreenProps {
  authStack: StackNavigationProp<AuthStackParamList>;
}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ authStack }) => {
  const { loading, setLoading } = useContext(Context);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation<typeof authStack>();
  const [error, setError] = useState('');

  const redirectButtonHandler = async() => {
    let formattedPhone;
    let phoneNumber;

    if (phone.length > 0) {
      phoneNumber = phone?.replace(/[(\)(/\s)(/\-)(/\+)]/g, '');
      formattedPhone = phoneNumber.substring(0, 12);
    }
    if (email.match(emailValidation) && 
        password.length > 0 && 
        name.length > 0 && 
        surname.length > 0 && 
        phone.length > 0
      ) {
      try {
        setLoading(true);
        const { data } = await axios({
          url: Api.url + Api.auth + '/register/',
          method: 'post',
          data: {
            sName: surname,
            fName: name,
            pName: '',
            email: email,
            phoneNumber: formattedPhone,
            password: password,
            confirmPassword: confirmPassword
          }
        })
        if (data) {
            console.log(data.data)
            navigation.navigate('Code');
            setLoading(false);
        }
        } catch (error) {
          setError(error?.response?.data.data)
        }
    } else {
      setError('?????????????? ?????????? ????????????????????.')
    }
  }

  return (
    <>
    {!loading ? (
      <Layout style={{flex: 1}}>
        <View style={styles.textContainer}>
          <View>
            <BoldText>???????????????????? ???????????? ??????????????????????</BoldText>
          </View>
          <View style={styles.regularTextContainer}>
            <Text
              style={styles.regularText}>
                ?????? ???????????????????? ???????????? ??????????????????????, 
                ?????? ???????????????? ???????????? ???????? ?????????, 
                ????????????????, ?????????? ????????????????, ???????????????????? 
                ???????????? ???? ????????????.
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView keyboardVerticalOffset={100} behavior='padding'>
          <ScrollView>
            <View style={styles.loginPasswordContainer}>
              <Input
                style={styles.halfWidthInput} 
                placeholder={'????`??'} 
                value={name} 
                setValue={setName}
              />
              <Input
                style={styles.halfWidthInput}
                placeholder={'????????????????'} 
                value={surname} 
                setValue={setSurname} 
              />
            </View>
            <View style={styles.inputContainer}>
              <PhoneInput
                geoNumber='380'
                placeholder='__ ___ ____'
                value={phone}
                inputMaskChange={setPhone}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder={'????. ??????????'} 
                value={email} 
                setValue={setEmail} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Input 
                placeholder={'????????????'} 
                value={password} 
                setValue={setPassword} 
                isSecure={true} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Input 
                placeholder={'?????????????????????? ????????????'} 
                value={confirmPassword} 
                setValue={setConfirmPassword} 
                isSecure={true} 
              />
              {error ? (
                <ErrorText text={error} />
              )
              :
                null
              }
            </View>
          </ScrollView>
 
        </KeyboardAvoidingView>
        <View style={styles.bottomButtonContainer}>
          <View>
            <Button
              label='??????????????????????????????' 
              buttonAction={() => redirectButtonHandler()} 
            />
          </View>
        </View>
      </Layout>
      )
    :
      <Layout style={{flex: 1}}>
        <Preloader />
      </Layout>
    }
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60,
    marginBottom: 20
  },
  regularTextContainer: {
    paddingTop: 20
  },
  regularText: {
    textAlign: 'center',
    fontSize: FontSize.regular
  },
  halfWidthInput: {
    width: '48%'
  },
  loginPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8
  },
  inputContainer: {
    paddingBottom: 8
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60
  },
  loginButtonContainer: {
    marginHorizontal: 'auto'
  },
  textButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 25,
    alignSelf: 'center',
  },
});

export default RegistrationScreen;