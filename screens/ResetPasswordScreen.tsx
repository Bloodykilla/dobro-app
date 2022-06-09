import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoldText from '../components/BoldText';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Preloader from '../components/Preloader';
import { Api } from '../constants/ApiUrl';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { AuthStackParamList } from '../navigation/AuthStackNavigation';


interface ResetPasswordScreenProps {
  navigation: StackNavigationProp<AuthStackParamList>
}

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ navigation }) => {
  const { setLoading, loading } = useContext(Context);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const resetPasswordHandler = async() => {
    if (password.length < 6) {
      setError('Пароль має містити більше 6 знаків')
    }

    if (password !== confirm) {
      setError('Паролі не збігаються.');
    } 
    try {
      setLoading(true);
      const response = await axios({
        url: Api.url + Api.auth + '/reset-password/',
        method: 'post',
        data: {
          token: code,
          password: password,
          confirmPassword: confirm
        }
      })
      if (response.data.data && response.data.result === "Success") {
        setLoading(false);
        navigation.navigate('Login');
      } else {
        setError(response?.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  return (
    <>
    {!loading ? (
      <Layout style={styles.container}>
        <View style={styles.textContainer}>
            <View>
              <BoldText>Відновлення паролю</BoldText>
            </View>
            <View style={styles.regularTextContainer}>
              <Text
                style={styles.regularText}>
                  Введіть новий пароль та отриманний веріфікаційний код за для зміни паролю.
              </Text>
            </View>
        </View>
        <View>
          <Input
            placeholder='Код' 
              value={code} 
            setValue={setCode}
          />
          <Input
            placeholder='Пароль' 
            value={password} 
            setValue={setPassword}
          />
          <Input
            placeholder='Підтвердження паролю' 
            value={confirm} 
            setValue={setConfirm}
          />
        </View>
        <View style={styles.textButtonContainer}>
            {error ? (
            <ErrorText text={error} style={{width: '100%'}} />
              )
            :
              null
            }
        </View>
        <View style={styles.bottomButtonContainer}>
            <Button
              label='Відновити пароль' 
              buttonAction={() => resetPasswordHandler()}
            />
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
  container: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 60
  },
  regularTextContainer: {
    paddingTop: 20
  },
  regularText: {
    textAlign: 'center',
    fontSize: FontSize.regular
  },
  textButtonContainer: {
    width: '100%',
    textAlign: 'right',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textButton: {
    marginLeft: 'auto',
    fontSize: FontSize.middle
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60
  }
});

export default ResetPasswordScreen;