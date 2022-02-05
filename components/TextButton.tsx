import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface TextButtonProps {
  text: string | null;
  buttonAction: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ text, buttonAction}) => {
  
  return (
    <TouchableOpacity style={styles.container} 
      onPress={() => buttonAction()}>
      <Text style={styles.text}>
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