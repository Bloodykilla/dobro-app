import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AboutScreenProps {

}

const AboutScreen: React.FC<AboutScreenProps> = ({}) => {
  
  return (
    <View style={styles.container}>
      <Text>
        About Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default AboutScreen;