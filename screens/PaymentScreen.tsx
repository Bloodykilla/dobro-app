import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PaymentScreenProps {

}

const PaymentScreen: React.FC<PaymentScreenProps> = ({}) => {
  
  return (
    <View style={styles.container}>
      <Text>
        Payment Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default PaymentScreen;