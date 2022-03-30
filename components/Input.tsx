import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface InputProps {
  placeholder: string | undefined,
  hasIcon?: boolean,
  style?:{};
  inputStyle?: {};
  value: string;
  isSecure?: boolean;
  setValue: (val:string) => void;
  maxLength?: number
}

const Input: React.FC<InputProps> = ({
  maxLength, 
  inputStyle, 
  placeholder, 
  style, 
  hasIcon, 
  value, 
  setValue, 
  isSecure 
  }) => {
  const [show, setShow] = useState(true);
  const [secure, setSecure] = useState(isSecure);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholderTextColor="#BEBEBE"
        placeholder={placeholder} 
        secureTextEntry={secure} 
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={setValue}
        maxLength={maxLength != null ? maxLength : 35}
      />
      {hasIcon
       ? 
      <TouchableOpacity style={styles.icon} onPress={() => { 
          setShow(!show);
          setSecure(!secure); 
        }} 
        >
      </TouchableOpacity>
        :
      <View/>
      } 
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
    padding: 12,
    fontSize: FontSize.regular,
    textAlign: 'left'
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16
  }
});

export default Input;