import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoldText from '../components/BoldText';
import Layout from '../components/Layout';

interface AboutScreenProps {

}

const AboutScreen: React.FC<AboutScreenProps> = ({}) => {
  
  return (
    <Layout style={{ justifyContent: 'center'}}>
      <View style={{marginVertical: 20}}>
        <BoldText>Ми допомагаємо</BoldText>
      </View>
      <View>
        <Text>
          Головна мета цього проекту - це допомога 
          літнім людям. Велика кількість бабусів та 
          дідусів потребують уваги та допомоги, тому 
          саме за допомгою нашого додатка, вони її отримують.

        </Text>
      </View>
      <View>
        {/* <Image source={require('../assets/images/handshake.png')} style={{width: 100, height: 100}} /> */}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default AboutScreen;