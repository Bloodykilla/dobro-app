import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import BoldText from "./BoldText";

interface PlugProps {}

const Plug: React.FC<PlugProps> = ({}) => {
  return (
    <View style={styles.container}>
      <BoldText style={{ fontSize: 24 }}>Воу, воу!</BoldText>
      <View style={{ marginVertical: 40 }}>
        <Image
          source={require("../assets/images/palm.png")}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View>
        <Text style={[styles.text, { fontWeight: "500", fontSize: 18 }]}>
          Не так швидко
        </Text>
        <Text style={styles.text}>Цей сервіс поки що не доступний.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    paddingVertical: 4,
  },
});

export default Plug;
