import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Marker } from "react-native-maps";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";

interface CustomMarkerProps {
  latitude: number | undefined;
  longitude: number | undefined;
  imgPath?: string | null;
  buttonAction: () => void;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  buttonAction,
  latitude,
  longitude,
  imgPath,
}) => {
  return (
    <TouchableOpacity>
      {latitude && longitude ? (
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          onPress={() => buttonAction()}
        >
          <View style={styles.circle}>
            <View style={styles.stroke} />
            {imgPath ? (
              <View style={styles.imageContainer}>
                <Image
                  source={imgPath ? { uri: imgPath } : { uri: "" }}
                  style={{
                    width: 30,
                    height: 30,
                    position: "absolute",
                    top: 0,
                  }}
                />
              </View>
            ) : (
              <View style={styles.core}>
                <View style={styles.smileContainer}>
                  <Text style={styles.smile}>:)</Text>
                </View>
              </View>
            )}
          </View>
        </Marker>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  stroke: {
    width: 35,
    height: 35,
    borderWidth: 3,
    borderColor: Colors.white,
    borderRadius: 50,
    zIndex: 2,
  },
  core: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: Colors.red,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 32,
    height: 32,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  smileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  smile: {
    textAlign: "center",
    fontSize: FontSize.label,
    color: Colors.white,
    padding: 0,
    fontWeight: "600",
  },
});

export default CustomMarker;
