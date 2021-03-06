import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import Layout from '../components/Layout';
import ScreenContainer from '../components/ScreenContainer';
import TextButton from '../components/TextButton';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
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
    <Layout style={{flex: 1}}>
      <View style={{
        flex: 1,
          justifyContent: 'center',
          marginTop: '50%'
        }}
      >
        <View style={styles.imageContainer}>
          <View>
            <Image source={require('../assets/images/hero.png')} width={75} />
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.boldText}>Добро</Text>
          </View>
          <View style={styles.regularTextContainer}>
            <Text style={styles.regularText}>
              Це соціальний додаток,
              котрий націлений на допомогу 
              нужденним людям та покращення 
              їх якості життя.
            </Text>
          </View>
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
  </Layout>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'center'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: FontSize.hero,
    color: Colors.black,
    letterSpacing: 2,
    textAlign: 'center',
  },
  regularTextContainer: {
    paddingTop: 15
  },
  regularText: {
    fontWeight: "500",
    fontSize: FontSize.regular,
    color: Colors.black,
    textAlign: 'center'
  },
  bottomButtonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60
  },
  loginButtonContainer: {
    marginHorizontal: 'auto'
  },
  textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15
  },
  buttonPadding: {
    paddingHorizontal: 6
  }
});

export default MainScreen;