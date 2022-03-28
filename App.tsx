import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator';
import Navigation from './navigation/Navigation';

export default function App() {

	return (
    <View style={{ flex: 1 }}>
      <AuthNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
