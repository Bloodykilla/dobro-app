import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";
import { NeedyPerson } from "../models/NeedyPerson";
import { HomeStackParamList } from "../navigation/StackNavigaton";
interface PaymentScreenProps {
  route: {
    params: {
      person: typeof NeedyPerson;
      selectedOption: number;
    };
  };
  mainStack: StackNavigationProp<HomeStackParamList>;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ route, mainStack }) => {
  const person = route?.params?.person;
  const activeNeedOption = route?.params?.selectedOption;
  const [mount, setMount] = useState("");
  const navigation = useNavigation<typeof mainStack>();

  const payForCurrentNeed = async () => {
    navigation.navigate("Thanks");
  };

  return (
    <>
      <Layout style={styles.container}>
        <View style={styles.warningTextContainer}>
          <Text style={styles.warningText}>
            Памʼятайте! Кожен раз, коли ви допомагаєте нужденній людині, ви
            отримуєте бали, котрі потім можна буде потратити на сервіси наших
            партнерів.
          </Text>
        </View>
        <View style={styles.paymentCardContainer}>
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
                style={styles.image}
              />
            </View>
            <View style={{ paddingLeft: 20 }}>
              <View style={styles.initialsContainer}>
                <Text
                  style={[
                    styles.needyName,
                    { maxWidth: Dimensions.get("window").width - 150 },
                  ]}
                >
                  Джо Байден, 80 років
                </Text>
              </View>
              <View style={{ paddingVertical: 4 }}>
                <Text
                  style={{ maxWidth: Dimensions.get("window").width - 150 }}
                >
                  {"Лікування від альцгеймеру"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.restContainer}>
          <Text style={styles.restText}>Залишилося зібрати: 8567 грн</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="#BEBEBE"
            placeholder="Введіть суму"
            keyboardType="numeric"
            style={styles.input}
            value={mount}
            onChangeText={setMount}
          />
        </View>
        <View>
          <Button label="Сплатити" buttonAction={() => payForCurrentNeed()} />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    flexDirection: "column",
  },
  paymentCardContainer: {
    height: "auto",
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 9,
  },
  input: {
    padding: 12,
    fontSize: FontSize.label,
    textAlign: "center",
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: 8,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  needyName: {
    textAlign: "left",
    fontSize: FontSize.regular,
    fontWeight: "500",
    maxWidth: 280,
  },
  inputContainer: {
    marginBottom: 40,
  },
  initialsContainer: {
    paddingVertical: 4,
  },
  warningTextContainer: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginVertical: 50,
    backgroundColor: Colors.black,
  },
  warningText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: FontSize.regular,
    color: Colors.white,
  },
  restText: {
    fontSize: FontSize.label,
    color: Colors.black,
    textAlign: "center",
  },
  restContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
});

export default PaymentScreen;
