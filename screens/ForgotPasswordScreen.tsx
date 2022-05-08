import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BoldText from '../components/BoldText';
import Button from '../components/Button';
import ErrorText from '../components/ErrorText';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Preloader from '../components/Preloader';
import TextButton from '../components/TextButton';
import { Api } from '../constants/ApiUrl';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { AuthStackParamList } from '../navigation/AuthStackNavigation';

interface ForgotPasswordScreenProps {
  navigation: StackNavigationProp<AuthStackParamList>
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const { setLoading, loading } = useContext(Context);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const forgotPasswordHandler = async() => {
    try {
      setLoading(true);

      const response = await axios({
        url: Api.url + Api.auth + '/forgot-password/',
        method: 'post',
        data: {
          email: email
        }
      })
      if (response.data.data && response.data.result === "Success") {
        setLoading(false);
        navigation.navigate('Reset');
      } else {
        setError(response?.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
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
                  Введіть свій логін від аккаунт для відновлення паролю та отримання подальших вказівок
              </Text>
            </View>
        </View>
        <View>
            <Input
              placeholder='Логін' 
              value={email} 
              setValue={setEmail}
            />
        </View>
        <View style={styles.textButtonContainer}>
            {error ? (
            <ErrorText text={error} />
              )
            :
              null
            }
        </View>
        <View style={styles.bottomButtonContainer}>
            <Button
              label='Відновити пароль' 
              buttonAction={() => forgotPasswordHandler()}
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

export default ForgotPasswordScreen;