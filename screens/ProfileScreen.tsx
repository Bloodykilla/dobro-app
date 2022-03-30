import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  
  return (
    <View style={styles.container}>
      <Text>
        Profile Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default ProfileScreen;