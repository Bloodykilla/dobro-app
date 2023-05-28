import { ApolloProvider } from "@apollo/client";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import client from "./api/ApolloClient/ApolloClient";
import { ContextProvider } from "./context/ContextProvider";
import Navigation from "./navigation/Navigation";

export default function App() {
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
    <ApolloProvider client={client}>
      <ContextProvider auth={null}>
        <SafeAreaView style={styles.appContainer}>
          <StatusBar style="dark" />
          <Navigation />
        </SafeAreaView>
      </ContextProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
