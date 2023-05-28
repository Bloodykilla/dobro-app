import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { FontSize } from "../constants/fontSize";
import { ProfileStackParamList } from "../navigation/StackNavigation";

interface ChangeEmailScreenProps {
  navigation: StackNavigationProp<ProfileStackParamList>;
}

const ChangeEmailScreen: React.FC<ChangeEmailScreenProps> = ({
  navigation,
}) => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const getVerifyTokenHandler = async () => {
    navigation.navigate("VerifyEmail");
  };

  return (
    <>
      <Layout style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.regularTextContainer}>
            <Text style={styles.regularText}>
              Введіть нову ел. пошту, поточну ел. пошту та пароль для отримання
              подальших вказівок
            </Text>
          </View>
        </View>
        <View>
          <Input
            placeholder="Поточна ел. пошта"
            value={currentEmail}
            setValue={setCurrentEmail}
          />
          <Input
            placeholder="Нова ел. пошта"
            value={newEmail}
            setValue={setNewEmail}
          />
          <Input placeholder="Пароль" value={password} setValue={setPassword} />
        </View>
        <View style={styles.textButtonContainer}>
          {error ? <ErrorText text={error} style={{ width: "100%" }} /> : null}
        </View>
        <View style={styles.bottomButtonContainer}>
          <Button
            label="Отримати код"
            buttonAction={() => getVerifyTokenHandler()}
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  textButtonContainer: {
    width: "100%",
    textAlign: "right",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textButton: {
    marginLeft: "auto",
    fontSize: FontSize.middle,
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
});

export default ChangeEmailScreen;
