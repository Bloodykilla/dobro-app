import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import Plug from '../components/Plug';

interface AchievemntScreenProps {

}

const AchievemntScreen: React.FC<AchievemntScreenProps> = ({}) => {
  
  return (
    <Layout style={{ justifyContent: 'center'}}>
      <Plug />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default AchievemntScreen;