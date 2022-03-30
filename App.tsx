import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContextProvider from './context/ContextProvider';
import Navigation from './navigation/Navigation';

export default function App() {
  let user = false;

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
