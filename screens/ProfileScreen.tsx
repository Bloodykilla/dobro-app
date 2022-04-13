import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from '../components/Layout';

interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  
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