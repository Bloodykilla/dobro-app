import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface TextButtonProps {
  text: string | null;
  buttonAction: () => void;
  style?: {};
}

const TextButton: React.FC<TextButtonProps> = ({ text, buttonAction, style}) => {
  
  return (
    <TouchableOpacity
      style={styles.container} 
      onPress={() => buttonAction()}>
      <Text style={[styles.text, style]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.red,
    fontSize: FontSize.label
  }
});
export default TextButton;