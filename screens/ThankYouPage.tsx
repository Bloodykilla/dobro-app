import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BoldText from '../components/BoldText';
import Button from '../components/Button';
import Layout from '../components/Layout';
import ScreenContainer from '../components/ScreenContainer';
import { Colors } from '../constants/Colors';
import { HomeStackParamList } from '../navigation/StackNavigaton';

interface ThankYouPageProps {
  homeStack: StackNavigationProp<HomeStackParamList>
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ homeStack }) => {
  const navigaiton = useNavigation<typeof homeStack>();

  const redirectButtonHandler = () => {
    navigaiton.popToTop();
  }

  return (
    <Layout style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', marginTop: '20%'}}>
        <BoldText>Дякуємо!</BoldText>
        <Text style={styles.regularText}>
          Завдяки вашій допомозі, ще одна 
          нужденна людина отримає допомогу 
          за для забезпечення її якості життя 
          та безпеки
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/party.png')} 
          style={styles.imageStyle} 
        />
      </View>
  
      <View style={styles.buttonContainer}>
        <Button
          label='На головну' 
          buttonAction={() => redirectButtonHandler()} 
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16
  },
  regularText: {
    textAlign: 'center',
    paddingVertical: 25,
    color: Colors.black
  },
  imageStyle: {
    width: 170,
    height: 170
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 75
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60
  }
});

export default ThankYouPage;