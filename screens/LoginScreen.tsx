import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BoldText from '../components/BoldText';
import Button from '../components/Button';
import Input from '../components/Input';
import ScreenContainer from '../components/ScreenContainer';
import TextButton from '../components/TextButton';
import { FontSize } from '../constants/fontSize';

interface LoginScreenProps {

}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loginButtonHandler = () => {
    if (login != '' && password != '') {
      Alert.alert('Need to write te bussiness logic =(')
    } else {
      Alert.alert('Введіть дані для входу в акаунт!')
    }
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
            buttonAction={() => console.log('forgot password button!')}
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