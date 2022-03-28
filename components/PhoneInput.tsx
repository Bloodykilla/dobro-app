import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface PhoneInputProps {
  placeholder: string | undefined;
  value: string | undefined;
  style?: {};
  inputMaskChange: (value: string) => void;
  geoNumber: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ geoNumber, placeholder, value, style, inputMaskChange }) => {

  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={{paddingLeft: 12}}>+{geoNumber} </Text>
      </View>
      <MaskedTextInput
        mask='99 999 9999'
        placeholderTextColor="#BEBEBE"
        placeholder={placeholder} 
        style={styles.input}
        value={value}
        maxLength={19}
        onChangeText={inputMaskChange}
        keyboardType='numeric'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    fontSize: FontSize.regular,
    textAlign: 'left'
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PhoneInput;