import React from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

interface LayoutProps {
  style?: {};
  networkStatus?: number;
  onRefresh?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  networkStatus,
  onRefresh,
}) => {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.white }}
      contentContainerStyle={[styles.layout, style]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={networkStatus === 4}
          onRefresh={onRefresh}
        />
      }
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
  },
});

export default Layout;
