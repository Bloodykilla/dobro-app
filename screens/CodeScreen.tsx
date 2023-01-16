import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BoldText from "../components/BoldText";
import Button from "../components/Button";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { FontSize } from "../constants/fontSize";
import { AuthStackParamList } from "../navigation/AuthStackNavigation";

interface CodeScreenProps {
  authStack: StackNavigationProp<AuthStackParamList>;
}

const CodeScreen: React.FC<CodeScreenProps> = ({ authStack }) => {
  const [code, setCode] = useState("");
  const navigation = useNavigation<typeof authStack>();

  const redirectButtonHandler = async () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <Layout style={{ flex: 1 }}>
        <View style={styles.textContainer}>
          <View>
            <BoldText>Введіть отриманний код</BoldText>
          </View>
          <View style={styles.regularTextContainer}>
            <Text style={styles.regularText}>
              Після введених даних, вам був надісланиій код для завершення
              реєстрації.
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.aboveCodeText}>
              Код відправлено на електронну пошту.
            </Text>
          </View>
          <Input
            placeholder=""
            value={code}
            setValue={setCode}
            inputStyle={styles.input}
            maxLength={6}
          />
        </View>
        <View style={styles.bottomButtonContainer}>
          <View>
            <Button
              label="Надіслати код"
              buttonAction={() => redirectButtonHandler()}
            />
          </View>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 60,
  },
  regularTextContainer: {
    paddingTop: 20,
  },
  regularText: {
    textAlign: "center",
    fontSize: FontSize.regular,
  },
  input: {
    textAlign: "center",
  },
  aboveCodeText: {
    textAlign: "center",
    paddingBottom: 12,
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
});

export default CodeScreen;
