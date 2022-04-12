import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface ProgressBarProps {
  progress: number | undefined,
  style?: {};
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, style }) => {

  return (
    <View style={[styles.container, style]}>
      <View style={styles.progressBar}>
        <View style={{
            width: `${progress}%`,
            backgroundColor: Colors.red,
            borderRadius: 20,
            height: 10
          }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  progressBar: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    height: 10,

  },
});

export default ProgressBar;

