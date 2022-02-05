import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';

interface RegistrationScreenProps {

}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container} >
      <View>
        <Input placeholder={'Ім`я'} value={name} setValue={setName} />
        <Input placeholder={'Прізвище'} value={surname} setValue={setSurname} />
      </View>
      <View>
        <Input placeholder={'Ел. пошта'} value={email} setValue={setEmail} />
        <Input placeholder={'Пароль'} value={password} setValue={setPassword} isSecure={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default RegistrationScreen;