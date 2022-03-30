import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HistoryDetailsScreenProps {

}

const HistoryDetailsScreen: React.FC<HistoryDetailsScreenProps> = ({}) => {
  
  return (
    <View style={styles.container}>
      <Text>
        History Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default HistoryDetailsScreen;