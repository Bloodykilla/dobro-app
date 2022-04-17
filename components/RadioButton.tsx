import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface RadioButtonProps {
 value: number;
 label: string;
 isActive: boolean;
 onSelect: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ isActive, value, label, onSelect }) => {

  return (
    <TouchableWithoutFeedback
      style={styles.container} 
      onPress={() => onSelect()}
    >
      <View style={[styles.circleWrapper, isActive ? {backgroundColor: Colors.red} : null]}>
        <View style={[styles.circle, isActive ? {backgroundColor: Colors.red} : null]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 4
  },
  circle: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: Colors.white,
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: Colors.white
  },
  circleWrapper: {
    borderRadius: 100,
    width: 30,
    height: 30,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.textGrey,
  },
  textContainer: {
    paddingLeft: 20
  },
  label: {
    fontSize: FontSize.regular,
    color: Colors.black
  },
  active: {
    backgroundColor: Colors.red
  }
});

export default RadioButton;