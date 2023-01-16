import React from "react";
import { StyleSheet, View } from "react-native";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  //init auth state for development and navigation between tab navigators
  // change auth to true for navigating to HomeScreen
  const auth = true;

  return (
    <View style={{ flex: 1 }}>
      {!auth ? <AuthNavigator /> : <TabNavigator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Navigation;
