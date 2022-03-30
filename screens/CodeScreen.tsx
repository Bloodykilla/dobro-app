import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BoldText from '../components/BoldText';
import Button from '../components/Button';
import Input from '../components/Input';
import ScreenContainer from '../components/ScreenContainer';
import { FontSize } from '../constants/fontSize';
import { sendVerifyToken } from '../http/Api';
import { AuthStackParamList } from '../navigation/AuthStackNavigation';

interface CodeScreenProps {
  authStack: StackNavigationProp<AuthStackParamList>;
}

const CodeScreen: React.FC<CodeScreenProps> = ({ authStack }) => {
  const [code, setCode] = useState('');
  const navigation = useNavigation<typeof authStack>();
  
  const redirectButtonHandler = async() => {
    try {
      if (code != '') {
        const {status} = await sendVerifyToken(code);
        if (status === 200) {
          navigation.navigate('Login')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(code);
  
  return (
    <ScreenContainer>
      <View style={styles.textContainer}>
        <View>
          <BoldText>Введіть отриманний код</BoldText>
        </View>
        <View style={styles.regularTextContainer}>
          <Text
            style={styles.regularText}>
              Після введених даних, 
              вам був надісланиій 
              код для завершення реєстрації.
          </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.aboveCodeText}>Код відправлено на електронну пошту.</Text>
        </View>
        <Input
          placeholder='' 
          value={code} 
          setValue={setCode} 
          inputStyle={styles.input}
          maxLength={6}
        />
      </View>
      <View style={styles.bottomButtonContainer}>
        <View>
          <Button label='Надіслати код' buttonAction={() => redirectButtonHandler()} />
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
  input: {
    textAlign: 'center'
  },
  aboveCodeText: {
    textAlign: 'center',
    paddingBottom: 12
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    alignSelf: 'center'
  }
});

export default CodeScreen;