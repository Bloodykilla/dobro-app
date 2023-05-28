import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../constants/Colors";

interface DetailsButtonProps {
  buttonAction: () => void;
}

const DetailsButton: React.FC<DetailsButtonProps> = ({ buttonAction }) => {
  return (
    <TouchableOpacity onPress={() => buttonAction()}>
      <View style={styles.iconContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.black,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 2,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 50,
    backgroundColor: Colors.black,
  },
});

export default DetailsButton;
