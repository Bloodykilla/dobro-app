import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface MenuInfoItemProps {
  label: string;
  value: number | string;
}

const MenuInfoItem: React.FC<MenuInfoItemProps> = ({ label, value }) => {
  
  return (
    <View style={styles.container} >
      <View>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  value: {
    fontSize: FontSize.big,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center'
  },
  label: {
    paddingTop: 2,
    fontSize: FontSize.regular,
    color: Colors.textGrey,
    textAlign: 'center'
  }
});

export default MenuInfoItem;