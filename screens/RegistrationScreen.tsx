import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BoldText from "../components/BoldText";
import Button from "../components/Button";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";
import Layout from "../components/Layout";
import PhoneInput from "../components/PhoneInput";
import { FontSize } from "../constants/fontSize";
import { AuthStackParamList } from "../navigation/AuthStackNavigation";

interface RegistrationScreenProps {
  authStack: StackNavigationProp<AuthStackParamList>;
}

const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  authStack,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation<typeof authStack>();
  const [error, setError] = useState("");

  const redirectButtonHandler = async () => {
    navigation.navigate("Code");
  };

  return (
    <>
      <Layout style={{ flex: 1 }}>
        <View style={styles.textContainer}>
          <View>
            <BoldText>Реєстрація нового користувача</BoldText>
          </View>
          <View style={styles.regularTextContainer}>
            <Text style={styles.regularText}>
              Для реєстрації нового користувача, вам потрібно ввести своє ім’я,
              прізвище, номер телефону, електронну адресу та пароль.
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="padding">
          <ScrollView>
            <View style={styles.loginPasswordContainer}>
              <Input
                style={styles.halfWidthInput}
                placeholder={"Ім`я"}
                value={name}
                setValue={setName}
              />
              <Input
                style={styles.halfWidthInput}
                placeholder={"Прізвище"}
                value={surname}
                setValue={setSurname}
              />
            </View>
            <View style={styles.inputContainer}>
              <PhoneInput
                geoNumber="380"
                placeholder="__ ___ ____"
                value={phone}
                inputMaskChange={setPhone}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder={"Ел. пошта"}
                value={email}
                setValue={setEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder={"Пароль"}
                value={password}
                setValue={setPassword}
                isSecure={true}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder={"Підтвердіть Пароль"}
                value={confirmPassword}
                setValue={setConfirmPassword}
                isSecure={true}
              />
              {error ? <ErrorText text={error} /> : null}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.bottomButtonContainer}>
          <View>
            <Button
              label="Зареєструватися"
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
    marginBottom: 20,
  },
  regularTextContainer: {
    paddingTop: 20,
  },
  regularText: {
    textAlign: "center",
    fontSize: FontSize.regular,
  },
  halfWidthInput: {
    width: "48%",
  },
  loginPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  inputContainer: {
    paddingBottom: 8,
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
  loginButtonContainer: {
    marginHorizontal: "auto",
  },
  textButtonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 25,
    alignSelf: "center",
  },
});

export default RegistrationScreen;
