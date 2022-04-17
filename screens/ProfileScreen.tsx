import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import Layout from '../components/Layout';
import { Context } from '../context/ContextProvider';

interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const { setAuth } = useContext(Context);

  const logoutUserHandler = async() => {
    try {
      await AsyncStorage.clear().then(() => {
        setAuth(false);
      })
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Layout style={{flex: 1, justifyContent: 'center'}}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg'}}
            style={styles.image} 
          />
        </View>
        <View>

        </View>
        <View>
          <View>
            <Button label='Вийти' buttonAction={() => {
              logoutUserHandler()
              }}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{

  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    borderRadius: 100,
    width: 130, 
    height: 130
  }
});

export default ProfileScreen;