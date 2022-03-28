import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthNavigator from './AuthNavigator';
import { AuthStackNavigator } from './AuthStackNavigation';

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = ({}) => {

  return (
    <View style={{ flex: 1 }}>
      <AuthNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
});

export default Navigation;