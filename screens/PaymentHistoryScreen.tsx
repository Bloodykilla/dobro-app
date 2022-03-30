import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PaymentHistoryScreenProps {

}

const PaymentHistoryScreen: React.FC<PaymentHistoryScreenProps> = ({}) => {
  
  return (
    <View style={styles.container}>
      <Text>
        Payment History screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default PaymentHistoryScreen;