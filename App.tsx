import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ContextProvider from './context/ContextProvider';
import Navigation from './navigation/Navigation';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

export default function App() {
  
  //  const getKeyFromStorage = async() => {
  //   let key = await AsyncStorage.getItem('session_key');
  //   console.log('security token: ',key);
  //   return key;
  // };

  // useEffect(() => {
  //   getKeyFromStorage();
  // }, [])
  
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'fontello': require('./assets/icons/font/fontello.ttf'),
    });
  };

  if (!fontLoaded ) {
    return (
      <AppLoading
        onError={() => console.log('error!')}
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
      />
    )
  }

	return (
    <ContextProvider>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  
});
