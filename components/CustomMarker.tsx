import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CustomMarkerProps {
  latitude: number | undefined;
  longitude: number | undefined;
  imgPath?: string | undefined;
  buttonAction: () => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ buttonAction, latitude, longitude, imgPath }) => {

  return (
    <TouchableOpacity>
      {latitude != null && longitude != null ? (
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude
          }}
          onPress={() => buttonAction()}
        >
          <View style={styles.circle}>
            <View style={styles.stroke} />
            {imgPath != null ? (
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: imgPath}} 
                  style={{width: 30, height: 30, position: 'absolute', top: 0}}
                />
              </View>
            )
            :
             <View style={styles.core} />
            }
          </View>
        </Marker>
      )
      :
        null
      }
  
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    borderWidth: 3,
    borderColor: Colors.white,
    borderRadius: 50,
    zIndex: 2
  },
  core: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: Colors.white,
    position: 'absolute',
  },
  imageContainer: {
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
});

export default CustomMarker;