import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

interface CustomTabProps {
  optionNameActive: string | null;
  optionNameFood: string | null;
  onSelectSwitch: (val: number) => void;
  activeСollection: boolean;
  foodBasket: boolean;
}

const CustomTab: React.FC<CustomTabProps> = ({ optionNameActive, optionNameFood, onSelectSwitch, activeСollection, foodBasket }) => {
  const [getSelectedOption, setSelectedOption] = useState(1);

  const updateSwitchData = (switchIndex: number) => {
    setSelectedOption(switchIndex);
    onSelectSwitch(switchIndex);
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <TouchableOpacity
          style={getSelectedOption === 1 ?  
            styles.activeButton : 
            styles.defaultButton
          }
          onPress={() => updateSwitchData(1)}
        >
          <Text style={styles.defaultText}
          >
            {optionNameActive}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getSelectedOption === 2  ?
            styles.activeButton : 
            styles.defaultButton
          }
          onPress={() => updateSwitchData(2)}
        >
          <Text style={styles.defaultText}
          >
            {optionNameFood}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  itemsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeButton: {
    width: '46%',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.red
  },
  defaultButton: {
    width: '46%',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32
  },
  defaultText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.black
  },
});

export default CustomTab;

