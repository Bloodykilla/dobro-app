import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SettingsScreenProps {

}

const SettingsScreen: React.FC<SettingsScreenProps> = ({}) => {
  
  return (
    <View style={styles.container}>
      <Text>
        Settings Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default SettingsScreen;