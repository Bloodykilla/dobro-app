import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Layout from '../components/Layout';
import PersonItem from '../components/PersonItem';
import Preloader from '../components/Preloader';
import { Context } from '../context/ContextProvider';
import { changeCustomerInfo } from '../http/Api';
import { PersonInfo } from '../models/Person';

interface SettingsScreenProps {

}

const SettingsScreen: React.FC<SettingsScreenProps> = ({}) => {
  const { customerInfo, loading, setLoading, storageKey } = useContext(Context);
  const [info, setInfo] = useState(PersonInfo);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (customerInfo && !loading) {
      setInfo(customerInfo);
    }
  })

  const editCustomerInfo = async(type: string) => {

    try {
      setLoading(true);
      if (type === 'phone') {
        const { data, result, error } = await changeCustomerInfo(null, null, phone.length < 12 ? phone : null, storageKey);
        if (data && result === "Success") {
          Alert.alert("Номер телефону був успішно змінений.");
          setLoading(false);
        } else {
          setPhone(info?.phoneNumber);
          setLoading(false);
          Alert.alert('Сталася помылка!');
        }
      }
      if (type === 'fname') {
        const { data, result } = await changeCustomerInfo( name, null, null, storageKey);
        if (data && result === "Success") {
          Alert.alert("Імʼя користувача було змінено.");
          setLoading(false);
        } else {
          setName(info?.fName);
          setLoading(false);
          Alert.alert('Сталася помылка!');
        }
      }
      if (type === 'sname') {
        const { data, result } = await changeCustomerInfo(null, surname, null, storageKey);
        if (data && result === "Success") {
          Alert.alert("Прізвище корисутвача було змінено.")
          setLoading(false);
        } else {
          setSurname(info?.sName);
          setLoading(false);
          Alert.alert('Сталася помылка!');
        }
      }
      if ('email') {
        setLoading(false);
        console.log('change email');
      }
      setEdit(!edit);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (customerInfo) {
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
          submitEdit={() => {}} 
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