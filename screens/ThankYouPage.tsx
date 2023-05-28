import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BoldText from "../components/BoldText";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { Colors } from "../constants/Colors";
import { HomeStackParamList } from "../navigation/StackNavigation";

interface ThankYouPageProps {
  homeStack: StackNavigationProp<HomeStackParamList>;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ homeStack }) => {
  const navigation = useNavigation<typeof homeStack>();

  const redirectButtonHandler = () => {
    navigation.popToTop();
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Thank you",
    });
  }, []);

  return (
    <Layout style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", marginTop: "20%" }}>
        <BoldText>Here we go!</BoldText>
        <Text style={styles.regularText}>
          Thanks to your help, one more needy person will receive help to ensure
          her quality of life and safety
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/party.png")}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label="Go to Homepage"
          buttonAction={() => redirectButtonHandler()}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  regularText: {
    textAlign: "center",
    paddingVertical: 25,
    color: Colors.black,
  },
  imageStyle: {
    width: 170,
    height: 170,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 75,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
});

export default ThankYouPage;
