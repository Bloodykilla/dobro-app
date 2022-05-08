import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface BoldTextProps {
  style?: {}
}

const BoldText: React.FC<BoldTextProps> = ({ children, style }) => {
  
  return (
    <View style={styles.container}>
      <Text style={[styles.boldText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
  boldText: {
    fontSize: FontSize.big,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default BoldText;