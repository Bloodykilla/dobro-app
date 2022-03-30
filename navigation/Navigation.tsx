import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/ContextProvider';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const { auth, setStorageKey, setAuth } = useContext(Context);
  const [value, setValue] = useState('');

  const getSessionKeyFromStorage = async() => {
    const lastKey = await AsyncStorage.getItem('last_session');
    try {
      if (lastKey !== null ) {
        setValue(lastKey); 
        setStorageKey(lastKey);
        setAuth(true);
      } 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSessionKeyFromStorage();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {value === null || !auth
      ? 
        <AuthNavigator />
      :
        <TabNavigator />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
});

export default Navigation;