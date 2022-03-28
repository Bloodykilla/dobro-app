import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <ScrollView
      contentContainerStyle={styles.layout}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  layout: {
    flexGrow: 1, 
    justifyContent: 'center',
    paddingHorizontal: 16
  },
});

export default Layout;