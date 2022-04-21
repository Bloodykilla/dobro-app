import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';

interface PreloaderProps {
  style?: {}
}

const Preloader: React.FC<PreloaderProps> = ({ style }) => {
  const windowProp = Dimensions.get('window');
  
  return (
    <View style={{height: windowProp.height - 100, justifyContent: 'center'}}>
      <View style={styles.container}>
        <ActivityIndicator
          size='large' 
          color={Colors.red} 
        />
      </View>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.white
    },
    loaderContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
  });


export default Preloader;