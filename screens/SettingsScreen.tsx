import { useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Layout from '../components/Layout';
import PersonItem from '../components/PersonItem';
import Preloader from '../components/Preloader';
import { Context } from '../context/ContextProvider';
import { changeCustomerInfo } from '../http/Api';
import { PersonInfo } from '../models/Person';
import { ProfileStackParamList } from '../navigation/StackNavigaton';

interface SettingsScreenProps {
  navigation: StackNavigationProp<ProfileStackParamList>
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { customerInfo, loading, setLoading, storageKey, setCustomerUpdate } = useContext(Context);
  const [info, setInfo] = useState(PersonInfo);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [edit, setEdit] = useState(false);
  const focus = useIsFocused();

  const resetUpdateValue = () => {
    setCustomerUpdate(false);
  }

  useEffect(() => {
    resetUpdateValue()
  }, [focus])

  useEffect(() => {
    if (customerInfo && !loading) {
      setInfo(customerInfo);
    }
  }, [email, phone, surname]);

  const editCustomerInfo = async(type: string) => {

    try {
      setLoading(true);
      if (type === 'phone' && phone !== '' && phone.length < 13 && !(/\s/).test(phone)) {
        const { data, result, error } = await changeCustomerInfo(null, null, phone, storageKey);
        if (data && result === "Success") {
          Alert.alert("Номер телефону був успішно змінений.");
          setLoading(false);
          setCustomerUpdate(true);
        } else {
          setPhone(info?.phoneNumber);
          setLoading(false);
          setCustomerUpdate(false);
          Alert.alert('Неправильний формат номеру!');
        }
      }
      if (type === 'fname' && !(/\d/).test(name)) {
        const { data, result } = await changeCustomerInfo( name, null, null, storageKey);
        if (data && result === "Success") {
          Alert.alert("Імʼя користувача було змінено.");
          setLoading(false);
          setCustomerUpdate(true);
        } else {
          setName(info?.fName);
          setLoading(false);
          setCustomerUpdate(false);
          Alert.alert('Неправильний формат імені!');
        }
      }
      if (type === 'sname' && !(/\d/).test(surname)) {
        const { data, result } = await changeCustomerInfo(null, surname, null, storageKey);
        if (data && result === "Success") {
          Alert.alert("Прізвище корисутвача було змінено.")
          setLoading(false);
          setCustomerUpdate(true);
        } else {
          setSurname(info?.sName);
          setLoading(false);
          setCustomerUpdate(false);
          Alert.alert('Неправильний формат прізвища!');
        }
      }
      setEdit(!edit);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (customerInfo && !loading) {
      setEmail(customerInfo?.email);
      setName(customerInfo?.fName);
      setSurname(customerInfo?.sName);
      setPhone(customerInfo?.phoneNumber);
    }
  }, [customerInfo]);


  return (
    <Layout style={{ justifyContent: 'center'}}>
      {info && !loading ? (
      <View style={styles.itemContainer}>
        <PersonItem
          fadeText='Імʼя' 
          value={name} 
          submitEdit={() => editCustomerInfo('fname')}  
          editable={edit}
          setValue={setName}
        />
        <PersonItem 
          fadeText='Прізвище' 
          value={surname} 
          submitEdit={() => editCustomerInfo('sname')} 
          editable={edit}
          setValue={setSurname}
        />
        <PersonItem 
          fadeText='Ел. пошта' 
          value={email}
          editable={false}
          submitEdit={() => {}} 
          action={() => navigation.navigate('ChangeEmail')}
        />
        <PersonItem 
          fadeText='Номер телефону' 
          value={phone} 
          submitEdit={() => editCustomerInfo('phone')} 
          editable={edit}
          setValue={setPhone}
        />
      </View>
        )
      :
        <Preloader />
      }
    </Layout>
  );
}

const styles = StyleSheet.create({
  itemContainer:{
    marginTop: 20,
    marginBottom: 40
  },
});

export default SettingsScreen;