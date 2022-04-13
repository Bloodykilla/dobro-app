import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContextProvider from './context/ContextProvider';
import Navigation from './navigation/Navigation';

export default function App() {
  
  //  const getKeyFromStorage = async() => {
  //   let key = await AsyncStorage.getItem('session_key');
  //   console.log('security token: ',key);
  //   return key;
  // };

  // useEffect(() => {
  //   getKeyFromStorage();
  // }, [])

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
