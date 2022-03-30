import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';
import { Colors } from '../constants/Colors';
import { HomeStackParamList } from '../navigation/StackNavigaton';

interface HomeScreenProps {
  homeStack: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ homeStack }) => {
  const navigation = useNavigation<typeof homeStack>();

  const markerHandler = () => {
    navigation.navigate('NeedyPerson');
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}     
      >
        <CustomMarker
          latitude={46.474777543324684}
          longitude={30.741367888669856}
          imgPath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn6USmgH1wGZLBDIORQceww5BLFaQRsGsow&usqp=CAU'
          buttonAction={() => markerHandler()}
        />
        <CustomMarker
          latitude={33.9277751910201}
          longitude={35.635215548733754}
          imgPath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn6USmgH1wGZLBDIORQceww5BLFaQRsGsow&usqp=CAU'
          buttonAction={() => markerHandler()}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stroke: {
    width: 35,
    height: 35,
    borderWidth: 5,
    borderColor: Colors.black,
    borderRadius: 50
  },
  core: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: Colors.white,
    position: 'absolute',
  }
});

export default HomeScreen;