import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import TextButton from './components/TextButton';

export default function App() {
  const navigation = useNavigation();

  const buttonHandler = () => {
    navigation.navigate({})
  };

  const [login, setLogin] = useState('');

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar style="auto" />
      <Input placeholder='Логін' value={login} setValue={setLogin} />
      <Button label={"Увійти"} buttonAction={() => buttonHandler()} />
      <TextButton text={'Зареєструватися'} buttonAction={() => buttonHandler()} />

    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
