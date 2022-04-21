import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { Icons } from './Icons';

interface BellProps {
  buttonAction: () => void;
  style?: {};
}

const Bell: React.FC<BellProps> = ({ buttonAction, style }) => {
  const [isUnhandled, setUnhadled] = useState(true);
   
  return (
    <TouchableOpacity
      style={[styles.bell, style]}
      onPress={() => buttonAction()}
    >
        <View style={ isUnhandled ? styles.redDot : styles.none}/>
      <Icons name='notification' size={19} color={Colors.black}/>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bell:{
    width: 40,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: Colors.black,
    borderWidth: 1,
    marginRight: 16,
    backgroundColor: Colors.white,
  },
  redDot: {
    position: 'absolute',
    height: 9,
    width: 9,
    backgroundColor: Colors.red,
    borderRadius: 50,
    zIndex: 2,
    top: 7,
    right: 9
  },
  none: {
    display: 'none'
  }
});

export default Bell;