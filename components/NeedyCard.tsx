import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import ProgressBar from './ProgressBar';

interface NeedyCardProps {
  title: string | undefined;
  rest: number | undefined;
  currentProgress: number | undefined;
}

const NeedyCard: React.FC<NeedyCardProps> = ({ title, rest, currentProgress }) => {
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Залишилося зібрати</Text>
      </View>
      <View>
        <Text style={styles.rest}>{rest} грн.</Text>
        <ProgressBar progress={currentProgress} style={styles.progress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'column',
    backgroundColor: Colors.black,
    justifyContent: 'center',
    paddingVertical: 38,
    paddingHorizontal: 17
  },
  title: {
    fontWeight: '400',
    fontSize: FontSize.big,
    color: Colors.white,
    textAlign: 'center'
  },
  subTitle: {
    fontWeight: '500',
    fontSize: FontSize.middle,
    color: Colors.white,
    textAlign: 'center',
    paddingTop: 10
  },
  rest: {
    paddingTop: 10,
    fontWeight: '600',
    fontSize: FontSize.large,
    color: Colors.white,
    textAlign: 'center'
  },
  progress: {
    paddingTop: 15
  }
});

export default NeedyCard;