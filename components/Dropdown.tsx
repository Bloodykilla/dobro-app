import React, { ReactElement, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import { Icons } from './Icons';

interface DropdownProps {
  label: string;
  data: Array<string>;
  onSelect: (item:string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, data, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const DropdownButton = useRef();
  const [dropdownTop, setDropdownTop] = useState(0); 
  const [selected, setSelected] = useState(undefined); 

  const toggleDropdown = (): void => {
    setVisible(!visible);
    openDropdown();
  };

  const onItemPress = (item): void => {
    setSelected(item);
    onSelect(item);
    setVisible(!visible);
  };
  
  const openDropdown = (): void => {
    DropdownButton?.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(!visible);
  };

  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={{color: Colors.black}}>{item}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    if (visible) {
      return (
        <Modal visible={visible} transparent animationType="none">
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
          >
            <View style={[styles.dropdown, { top: dropdownTop }]}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      );
    }
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={() => toggleDropdown()}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>{label}</Text>
      <View style={{transform: [{rotate: '90deg'}]}}>
        <Icons name='arrow' size={16} />
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    width: '75%',
    maxHeight: Dimensions.get('window').height / 5,
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: .4,
    borderBottomColor: Colors.textGrey,
    marginHorizontal: 15
  },
});

export default Dropdown;