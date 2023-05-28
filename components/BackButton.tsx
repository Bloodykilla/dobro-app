import React from "react";
import { StyleSheet, View } from "react-native";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = ({}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default BackButton;
