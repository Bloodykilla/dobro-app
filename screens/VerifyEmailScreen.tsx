import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { FontSize } from "../constants/fontSize";

import { ProfileStackParamList } from "../navigation/StackNavigaton";

interface VerifyEmailScreenProps {
  navigation: StackNavigationProp<ProfileStackParamList>;
}

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const changeEmailHandler = async () => {
    navigation.popToTop();
  };

  return (
    <>
      <Layout style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.regularTextContainer}>
            <Text style={styles.regularText}>
              Введіть нову ел. пошту для завершення операції.
            </Text>
          </View>
        </View>
        <View>
          <Input
            placeholder="Отриманий код"
            value={token}
            setValue={setToken}
          />
          <Input
            placeholder="Нова ел. пошта"
            value={email}
            setValue={setEmail}
          />
          <Input
            placeholder="Підтвердження ел. пошти"
            value={confirmEmail}
            setValue={setConfirmEmail}
          />
        </View>
        <View style={styles.textButtonContainer}>
          {error ? <ErrorText text={error} style={{ width: "100%" }} /> : null}
        </View>
        <View style={styles.bottomButtonContainer}>
          <Button
            label="Змінити ел. пошту"
            buttonAction={() => changeEmailHandler()}
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

export default VerifyEmailScreen;
