import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface ButtonProps {
  label: string | null;
  buttonAction: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, buttonAction }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => buttonAction()}>
      <Text style={styles.buttonLabel}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderRadius: 8,
    backgroundColor: Colors.red,
  },
  buttonLabel: {
    fontSize: FontSize.label,
    alignItems: 'center',
    color: Colors.white
  },
});

export default Button;