import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface HelpedMonthProps {
  helped: number | undefined;
}

const HelpedMonth: React.FC<HelpedMonthProps> = ({ helped }) => {
  
  return (
    <View >
      <View>
        <Text style={styles.title}>Helped in general</Text>
      </View>
      <View style={styles.helpContainer}>
        <View style={styles.sidePadding}>
          <Text style={styles.boldText}>{helped}</Text>
        </View>
        <View style={styles.sidePadding}>
          <Image
            source={require('../assets/images/smile.png')} 
            style={styles.smileImage}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  smileImage: {
    width: 40,
    height: 40
  },
  title: {
    fontWeight: '500',
    fontSize: FontSize.label,
    color: Colors.textGrey,
    textAlign: 'center'
  },
  helpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: FontSize.hero,
    color: Colors.black
  },
  sidePadding: {
    paddingHorizontal: 5
  }
});

export default HelpedMonth;