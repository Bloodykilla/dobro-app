import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../components/CustomMarker';
import { Colors } from '../constants/Colors';
import { Context } from '../context/ContextProvider';
import { NeedyPerson } from '../models/NeedyPerson';
import { HomeStackParamList } from '../navigation/StackNavigaton';

interface HomeScreenProps {
  homeStack: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ homeStack }) => {
  const { needyPerson, loading } = useContext(Context);
  const navigation = useNavigation<typeof homeStack>();
  const [needyArray, setNeedyArray] = useState([NeedyPerson]);

  useEffect(() => {
    if (needyPerson && !loading) {
      setNeedyArray(needyPerson);
    }
  })

  const markerHandler = (item: typeof NeedyPerson) => {
    if (item) {
      navigation.navigate('NeedyPerson',{
        needyPerson: item
      })
    } else {
      return;
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.48164033135742, 
          longitude:  30.726885423942463,
          latitudeDelta: 0,
          longitudeDelta: 0
        }}
      >
        {needyArray.length > 0 ? (
          <>
          {needyArray?.map((item, index) => (
            <CustomMarker 
              key={index}
              latitude={item?.address?.latitude}
              longitude={item?.address?.longitude}
              imgPath={item?.imageLink}
              buttonAction={() => markerHandler(item)}
            />
            ))
          }
          </>
        )
        : null
        }
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