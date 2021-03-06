import AsyncStorage from '@react-native-async-storage/async-storage';
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
import TextButton from '../components/TextButton';
import { Api } from '../constants/ApiUrl';
import { emailValidation } from '../constants/emailRegex';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { AuthStackParamList } from '../navigation/AuthStackNavigation';

interface LoginScreenProps {
  navigation: StackNavigationProp<AuthStackParamList>
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth, setStorageKey, setLoading, loading } = useContext(Context);
  const [error, setError] = useState('');

  const loginButtonHandler = async() => {
    const existedKeys = await AsyncStorage.getItem('session_key');

    if (login.match(emailValidation) && password.length > 0) {
      try {
        setLoading(true)
        const {data} = await axios({
          url: Api.url + Api.auth + '/login/',
          method: 'post',
          data: {
            email: login,
            password: password
          }
        })
        if (
            data.securityToken && 
            data?.result === 'Success' && 
            existedKeys != null &&  
            !existedKeys?.includes(data?.data.securityToken)
          ) {
          await AsyncStorage.setItem('last_session', data?.data.securityToken)
          await AsyncStorage.setItem('session_key', existedKeys + ',' + data?.data.securityToken)
          .then(() => 
          setLoading(false),
          setStorageKey(data?.data.securityToken));
          setAuth(true);
        }
        if (data?.data.securityToken && 
            data?.result === 'Success' && 
            !existedKeys
          ) {
          await AsyncStorage.setItem('last_session', data?.data.securityToken)
          await AsyncStorage.setItem('session_key', data?.data.securityToken)
          .then(() => 
          setLoading(false),
          setStorageKey(data?.data.securityToken));
          setAuth(true)
        }
      } catch(error) {
        setError(error.response.data.data);
        setLoading(false);
      }
    }
    if (!login.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setError('???????????????????????? ???????????? ????????????')
    }
    if (!password) {
      setError('?????????????? ????????????')
    }
  };

  const forgotPasswordHandler = () => {
    navigation.navigate('Forgot')
  };

  return (
    <>
    {!loading ? (
      <Layout style={{flex: 1}}>
        {/* <KeyboardAvoidingView style={{flexGrow: 1}} behavior='padding'> */}
        <View style={styles.textContainer}>
          <View>
            <BoldText>?????????????????????? ??????????????????????</BoldText>
          </View>
          <View style={styles.regularTextContainer}>
            <Text
              style={styles.regularText}>
                ???????????????? ?? ???????????? ?????? ???????? ?????? ???????? ???????????? ???????????? ???? ??????????????.
            </Text>
          </View>
        </View>
        <View>
          <Input
            placeholder='??????????' 
            value={login} 
            setValue={setLogin}
          />
          <Input
            placeholder='????????????'
            value={password} 
            setValue={setPassword}
            isSecure={true}
          />
        </View>
        <View style={styles.textButtonContainer}>
          {error ? (
          <ErrorText text={error} />
            )
          :
            null
          }
          <View style={styles.textButton}>
            <TextButton
              text='???????????? ?????????????' 
              buttonAction={() => forgotPasswordHandler()}
            />
          </View>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Button
            label='????????????' 
            buttonAction={() => loginButtonHandler()}
          />
        </View>
        {/* </KeyboardAvoidingView> */}
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

export default LoginScreen;