import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking, Alert } from 'react-native';
import BoldText from '../components/BoldText';
import Input from '../components/Input';
import ScreenContainer from '../components/ScreenContainer';
import PhoneInput from '../components/PhoneInput'
import { FontSize } from '../constants/fontSize';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigation/AuthStackNavigation';

interface RegistrationScreenProps {
  authStack: StackNavigationProp<AuthStackParamList>;
}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ authStack }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation<typeof authStack>();

  const redirectButtonHandler = (route: string) => {
    if (route === 'Code' && 
        name != '' &&
        surname != '' &&
        email != '' &&
        password != '' &&
        confirmPassword != '' &&
        phone != '') {
      navigation.navigate('Code');
    } else {
      Alert.alert('Виникла помилка! Спробуйте знову.')
    }
  }

  return (
    <ScreenContainer>
      <View style={styles.textContainer}>
        <View>
          <BoldText>Реєстрація нового користувача</BoldText>
        </View>
        <View style={styles.regularTextContainer}>
          <Text
            style={styles.regularText}>
              Для реєстрації нового користувача, 
              вам потрібно ввести своє ім’я, 
              прізвище, номер телефону, електронну 
              адресу та пароль.
          </Text>
        </View>
      </View>
      <View style={styles.loginPasswordContainer}>
        <Input
          style={styles.halfWidthInput} 
          placeholder={'Ім`я'} 
          value={name} 
          setValue={setName}
        />
        <Input
          style={styles.halfWidthInput}
          placeholder={'Прізвище'} 
          value={surname} 
          setValue={setSurname} 
        />
      </View>
      <View>
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
            placeholder={'Ел. пошта'} 
            value={email} 
            setValue={setEmail} 
          />
        </View>
        <View style={styles.inputContainer}>
          <Input 
            placeholder={'Пароль'} 
            value={password} 
            setValue={setPassword} 
            isSecure={true} 
          />
        </View>
        <View style={styles.inputContainer}>
          <Input 
            placeholder={'Підтвердіть Пароль'} 
            value={confirmPassword} 
            setValue={setConfirmPassword} 
            isSecure={true} 
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <View>
          <Button
            label='Зареєструватися' 
            buttonAction={() => redirectButtonHandler('Code')} 
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
    alignSelf: 'center',
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
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignSelf: 'center'
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