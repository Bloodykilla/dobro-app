import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import { Icons } from './Icons';

interface LogoutButtonProps {
  buttonAction: () => void;
  style?: {};
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ buttonAction, style }) => {
  
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={() => buttonAction()}>
      <View style={styles.iconContainer}>
        <Icons name='logout' size={24} color={Colors.red} />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Вихід</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '30%',
  },
  label: {
    fontSize: FontSize.label,
    color: Colors.red,
    fontWeight: '500'
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    paddingLeft: 12
  }
});

export default LogoutButton;