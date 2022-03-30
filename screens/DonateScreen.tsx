import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DonateScreenProps {

}

const DonateScreen: React.FC<DonateScreenProps> = ({}) => {
  
  return (
    <View style={styles.container}>
      <Text>
        Donate Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default DonateScreen;