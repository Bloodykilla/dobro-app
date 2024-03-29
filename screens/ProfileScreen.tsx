import { StackNavigationProp } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Layout from "../components/Layout";
import LogoutButton from "../components/LogoutButton";
import MenuInfoItem from "../components/MenuInfoItem";
import MenuItem from "../components/MenuItem";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";
import { AppContext } from "../context/ContextProvider";
import { ProfileStackParamList } from "../navigation/StackNavigation";

interface ProfileScreenProps {
  navigation: StackNavigationProp<ProfileStackParamList>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const { setAuth } = useContext(AppContext);
  const [person, setPerson] = useState();

  const logoutUserHandler = async () => {
    setAuth!(false);
  };

  const redirectButtonHandler = (route: string) => {
    if (route === "settings") {
      navigation.navigate("Settings");
    }
    if (route === "achieve") {
      navigation.navigate("Achievement");
    }
    if (route === "about") {
      navigation.navigate("AboutProject");
    }
    if (route === "donate") {
      navigation.navigate("Donate");
    }
  };

  return (
    <>
      <Layout>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
              }}
              style={styles.image}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.initials}>
                  {"Барак"} {"Обама"}
                </Text>
              </View>
              <View>
                <Text style={styles.email}>{"barak1965@gamil.com"}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.menuInfoContainer}>
          <MenuInfoItem label="Бонуси" value={911} />
          <MenuInfoItem label="Допомоги" value={35} />
          <MenuInfoItem label="Досягнення" value={12} />
        </View>
        <View style={styles.menuContainer}>
          <MenuItem
            iconName="settings"
            label="Редагування профілю"
            buttonAction={() => redirectButtonHandler("settings")}
          />
          <MenuItem
            iconName="star"
            label="Досягнення"
            buttonAction={() => redirectButtonHandler("achieve")}
          />
          <MenuItem
            iconName="heart"
            label=" Про проект"
            buttonAction={() => redirectButtonHandler("about")}
          />
          <MenuItem
            iconName="hand"
            label="Підтримати нас"
            buttonAction={() => redirectButtonHandler("donate")}
          />
        </View>
        <LogoutButton
          style={{ marginVertical: 20 }}
          buttonAction={() => logoutUserHandler()}
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 110,
    height: 110,
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemContainer: {
    paddingVertical: 20,
    width: "48%",
    borderRadius: 8,
  },
  initials: {
    color: Colors.black,
    fontSize: FontSize.large,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 2,
  },
  email: {
    color: Colors.textGrey,
    fontSize: FontSize.regular,
    fontWeight: "400",
    textAlign: "center",
    paddingVertical: 2,
  },
  menuInfoContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  menuContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  linksContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});

export default ProfileScreen;
