import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppContext, AppContextProvider } from "./context/ContextProvider";
import Navigation from "./navigation/Navigation";

export default function App() {
  const { auth } = useContext(AppContext);
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      fontello: require("./assets/icons/font/fontello.ttf"),
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        onError={() => console.log("error!")}
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <AppContextProvider auth={auth}>
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Navigation />
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({});
