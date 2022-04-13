import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

interface LayoutProps {
  style?: {}
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  
  return (
    <ScrollView
      style={{backgroundColor: Colors.white}}
      contentContainerStyle={[styles.layout, style]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
  },
});

export default Layout;