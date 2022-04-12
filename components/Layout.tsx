import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

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
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
});

export default Layout;