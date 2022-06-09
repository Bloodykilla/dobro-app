import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icons } from './Icons';

interface IconButtonProps {
  name: string;
  buttonAction: () => void;
  size: number;
  color: string;
  style?: {};
}

const IconButton: React.FC<IconButtonProps> = ({ style, name, buttonAction, size, color }) => {

  return (
    <TouchableOpacity style={[style]} onPress={() => buttonAction()}>
      <Icons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
});

export default IconButton;