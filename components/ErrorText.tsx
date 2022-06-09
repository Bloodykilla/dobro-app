import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorTextProps {
  text: string;
  style?: {}
}

const ErrorText: React.FC<ErrorTextProps> = ({ text, style }) => {
  
  return (
    <View style={[{width: '50%'}, style]}>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    fontSize: 14,
    color: 'red',
    fontWeight: '300'
  }
});

export default ErrorText;