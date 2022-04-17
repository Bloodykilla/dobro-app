import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BoldText from '../components/BoldText';
import Button from '../components/Button';
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
    <ScreenContainer>
      <View>
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
          source={require('../assets/images/face-hearts.png')} 
          style={styles.imageStyle} 
        />
      </View>
  
      <View style={styles.buttonContainer}>
        <Button
          label='На головну' 
          buttonAction={() => redirectButtonHandler()} 
        />
      </View>
    </ScreenContainer>
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
    width: 125,
    height: 125
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 75
  },
  buttonContainer: {

  }
});

export default ThankYouPage;