import { useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Layout from "../components/Layout";
import PersonItem from "../components/PersonItem";
import { ProfileStackParamList } from "../navigation/StackNavigation";

interface SettingsScreenProps {
  navigation: StackNavigationProp<ProfileStackParamList>;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const [info, setInfo] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);
  const focus = useIsFocused();

  const resetUpdateValue = () => {};

  const editCustomerInfo = async (type: string) => {};

  return (
    <Layout style={{ justifyContent: "center" }}>
      <View style={styles.itemContainer}>
        <PersonItem
          fadeText="Імʼя"
          value={"Барак"}
          submitEdit={() => editCustomerInfo("fname")}
          editable={edit}
          setValue={setName}
        />
        <PersonItem
          fadeText="Прізвище"
          value={"Обама"}
          submitEdit={() => editCustomerInfo("sname")}
          editable={edit}
          setValue={setSurname}
        />
        <PersonItem
          fadeText="Ел. пошта"
          value={"barak1965@gamil.com"}
          editable={false}
          submitEdit={() => {}}
          action={() => navigation.navigate("ChangeEmail")}
        />
        <PersonItem
          fadeText="Номер телефону"
          value={"+1-911-119-12"}
          submitEdit={() => editCustomerInfo("phone")}
          editable={edit}
          setValue={setPhone}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default SettingsScreen;
