import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface NeedyCardProps {
  title: string | undefined;
  rest: string | undefined;
}

const NeedyCard: React.FC<NeedyCardProps> = ({ title, rest }) => {
  
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text></Text>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'column',
    backgroundColor: Colors.black
  },
});

export default NeedyCard;