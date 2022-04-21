import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from '../components/Layout';
import LogoutButton from '../components/LogoutButton';
import MenuInfoItem from '../components/MenuInfoItem';
import MenuItem from '../components/MenuItem';
import Preloader from '../components/Preloader';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { PersonInfo } from '../models/Person';

interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const { setAuth, customerInfo, loading, countHelp } = useContext(Context);
  const [person, setPerson] = useState(PersonInfo);


  const logoutUserHandler = async() => {
    try {
      await AsyncStorage.clear().then(() => {
        setAuth(false);
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (customerInfo && !loading) {
      setPerson(customerInfo);
    }
  }, [customerInfo]);

  return (
    <>
    {person && !loading ? (
      <Layout>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg'}}
              style={styles.image} 
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.initials}>{person?.fName} {person?.sName}</Text>
              </View>
              <View>
                <Text style={styles.email}>{person?.email}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.menuInfoContainer}>
          <MenuInfoItem label='Бонуси' value={person?.bonus} />
          {/* <MenuInfoItem label='Допомоги за місяць' value={countHelp} /> */}
          <MenuInfoItem label='Досягнень' value={4} />
        </View>
        <View style={styles.menuContainer}>
          <MenuItem iconName='settings' label='Редагування профілю' buttonAction={() => {}} />
          <MenuItem iconName='star' label='Досягнення' buttonAction={() => {}} />
          <MenuItem iconName='stats' label='Загальна інформація' buttonAction={() => {}} />
          <MenuItem iconName='heart' label=' Про проект' buttonAction={() => {}} />
          <MenuItem iconName='hand' label='Підтримати нас' buttonAction={() => {}} />
        </View>
        <LogoutButton style={{marginVertical: 20}} buttonAction={() => logoutUserHandler()} />
      </Layout>
      )
    :
      <Preloader />
    }
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 110, 
    height: 110
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemContainer: {
    paddingVertical: 20,
    width: '48%',
    borderRadius: 8,
  },
  initials: {
    color: Colors.black,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 2
  },
  email: {
    color: Colors.textGrey,
    fontSize: FontSize.regular,
    fontWeight: '400',
    textAlign: 'center',
    paddingVertical: 2
  },
  menuInfoContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  menuContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  linksContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
});

export default ProfileScreen;