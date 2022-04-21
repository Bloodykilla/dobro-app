import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import { Icons } from './Icons';

interface MenuItemProps {
  buttonAction: () => void;
  iconName: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ buttonAction, iconName, label }) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => buttonAction()}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <Icons name={iconName} size={24} color={Colors.white} />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </View>
      <View>
        <Icons name='arrow' size={16} color={Colors.black} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: FontSize.regular,
    color: Colors.black,
    fontWeight: '500'
  },
  labelContainer: {
    paddingLeft: 12
  }
});

export default MenuItem;