import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BoldText from '../components/BoldText';
import Button from '../components/Button';
import Input from '../components/Input';
import ScreenContainer from '../components/ScreenContainer';
import TextButton from '../components/TextButton';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { fetchLoginToken } from '../http/Api';

interface LoginScreenProps {

}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth, setStorageKey } = useContext(Context);
  const [error, setError] = useState('');

  const loginButtonHandler = async() => {
    const existedKeys = await AsyncStorage.getItem('session_key');
    try {
      const token = await fetchLoginToken(login, password);
      if (
        token != null && 
        existedKeys !== null &&  
        !existedKeys?.includes(token)
        ) {
        await AsyncStorage.setItem('last_session', token)
        await AsyncStorage.setItem('session_key', existedKeys + ',' + token)
        .then(() => 
        setStorageKey(token));
        setAuth(true)
      }
      if (token != null && !existedKeys) {
        await AsyncStorage.setItem('last_session', token)
        await AsyncStorage.setItem('session_key', token)
        .then(() => 
        setStorageKey(token));
        setAuth(true)
      }
      else {
        setError(token.error);
      }
    } catch(error) {
      console.log(error);
    }
  };

  const forgotPasswordHandler = () => {
    Alert.alert('На жаль, ця функція не доступна');
  };

  return (
    <ScreenContainer>
      <View style={styles.textContainer}>
        <View>
          <BoldText>Авторизація користувача</BoldText>
        </View>
        <View style={styles.regularTextContainer}>
          <Text
            style={styles.regularText}>
              Увійдіть в акаунт для того щоб мати повний доступ до додатку.
          </Text>
        </View>
      </View>
      <View>
        <View>
          <Input
            placeholder='Логін' 
            value={login} 
            setValue={setLogin}
          />
          <Input
            placeholder='Пароль'
            value={password} 
            setValue={setPassword}
            isSecure={true}
          />
        </View>
        <View style={styles.textButtonContainer}>
          <TextButton
            style={styles.textButton} 
            text='Забули пароль?' 
            buttonAction={() => forgotPasswordHandler()}
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <View>
          <Button
            label='Увійти' 
            buttonAction={() => loginButtonHandler()}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: 80,
    width: '100%',
    alignSelf: 'center'
  },
  regularTextContainer: {
    paddingTop: 20
  },
  regularText: {
    textAlign: 'center',
    fontSize: FontSize.regular
  },
  textButtonContainer: {
    paddingTop: 8,
    alignSelf: 'flex-end'
  },
  textButton: {
    fontSize: FontSize.middle
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignSelf: 'center'
  }
});

export default LoginScreen;