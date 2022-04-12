import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import TextButton from '../components/TextButton';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { NeedyPerson } from '../models/NeedyPerson';
import { AuthStackParamList } from '../navigation/AuthStackNavigation';

interface MainScreenProps {
  authStack: StackNavigationProp<AuthStackParamList>;
}

const MainScreen: React.FC<MainScreenProps> = ({ authStack }) => {
  const navigation = useNavigation<typeof authStack>();

  const redirectButtonHandler = (route: string) => {
    if (route === 'Login') {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Registration')
    }
  }
  
	return (
    <ScreenContainer>
      <View style={styles.imageContainer}>
        <View>
          <Image source={require('../assets/images/hero.png')} width={75} />
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.boldText}>Добро — це</Text>
        </View>
        <View style={styles.regularTextContainer}>
          <Text style={styles.regularText}>
            соціальний додаток,
            котрий націлений на допомогу 
            нужденним людям та покращення 
            їх якості життя.
          </Text>
        </View>
      </View>
      <View style={styles.bottomButtonsContainer}>
        <View style={styles.loginButtonContainer}>
          <Button
            label='Увійти' 
            buttonAction={() => redirectButtonHandler('Login')} 
          />
        </View>
        <View style={styles.textButtonContainer}>
          <View style={styles.buttonPadding}>
            <Text>Не має акаунту?</Text>
          </View>
          <View style={styles.buttonPadding}>
            <TextButton
              text="Зареєструватися" 
              buttonAction={() => redirectButtonHandler('Registration')} 
            />
          </View>
        </View>
      </View>
  </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: FontSize.hero,
    color: Colors.black,
    letterSpacing: 2,
    textAlign: 'center',
  },
  regularTextContainer: {
    paddingTop: 30
  },
  regularText: {
    fontWeight: "500",
    fontSize: FontSize.regular,
    color: Colors.black,
    textAlign: 'center'
  },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 45,
    width: '100%',
    alignSelf: 'center'
  },
  loginButtonContainer: {
    marginHorizontal: 'auto'
  },
  textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 25
  },
  buttonPadding: {
    paddingHorizontal: 6
  }
});

export default MainScreen;