import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BoldText from "../components/BoldText";
import Button from "../components/Button";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";
import Layout from "../components/Layout";
import TextButton from "../components/TextButton";
import { FontSize } from "../constants/fontSize";
import { AppContext } from "../context/ContextProvider";
import { AuthStackParamList } from "../navigation/AuthStackNavigation";

interface LoginScreenProps {
  navigation: StackNavigationProp<AuthStackParamList>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { setAuth, auth } = useContext(AppContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginButtonHandler = async () => {
    setAuth!(true);
  };

  const forgotPasswordHandler = () => {
    navigation.navigate("Forgot");
  };

  return (
    <>
      <Layout style={{ flex: 1 }}>
        {/* <KeyboardAvoidingView style={{flexGrow: 1}} behavior='padding'> */}
        <View style={styles.textContainer}>
          <View>
            <BoldText>Авторизація користувача</BoldText>
          </View>
          <View style={styles.regularTextContainer}>
            <Text style={styles.regularText}>
              Увійдіть в акаунт для того щоб мати повний доступ до додатку.
            </Text>
          </View>
        </View>
        <View>
          <Input placeholder="Логін" value={login} setValue={setLogin} />
          <Input
            placeholder="Пароль"
            value={password}
            setValue={setPassword}
            isSecure={true}
          />
        </View>
        <View style={styles.textButtonContainer}>
          {error ? <ErrorText text={error} /> : null}
          <View style={styles.textButton}>
            <TextButton
              text="Забули пароль?"
              buttonAction={() => forgotPasswordHandler()}
            />
          </View>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Button label="Увійти" buttonAction={() => loginButtonHandler()} />
        </View>
        {/* </KeyboardAvoidingView> */}
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

export default LoginScreen;
