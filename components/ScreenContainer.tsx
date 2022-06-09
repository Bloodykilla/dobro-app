import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Colors } from '../constants/Colors';

interface ScreenContainerProps {

}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
    >
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.white
  }
})

export default ScreenContainer;