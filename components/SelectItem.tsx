import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface SelectItemProps {
  value: string;
  isSelected: boolean;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, isSelected }) => {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View style={isSelected ? {backgroundColor: Colors.red} : styles.item}>
        <Text style={isSelected ? {color: Colors.white} : styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  item: {
    width: '100%',
    paddingHorizontal: 12,
  },
  value: {
    fontSize: FontSize.regular,
    color: Colors.black,
    fontWeight: '400'
  },
});

export default SelectItem;