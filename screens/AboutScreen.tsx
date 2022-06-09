import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import BoldText from '../components/BoldText';
import Layout from '../components/Layout';
import TextButton from '../components/TextButton';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface AboutScreenProps {

}

const AboutScreen: React.FC<AboutScreenProps> = ({}) => {

  const openLinkHandler = (link: string) => {
    if (link) {
      Linking.openURL(`https://${link}.com`)
    } else {
      return;
    }
  };
  
  return (
    <Layout>
      <View style={{marginVertical: 20}}>
        <BoldText>Ми робимо "Добро"</BoldText>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
        <Image source={require('../assets/images/team.png')}
          style={{width: '100%', height: 200, borderRadius: 8}} 
        />
      </View>      
      <View style={{marginBottom: 20}}>
        <Text style={{textAlign: 'justify', color: Colors.black}}>
        <Text style={{fontWeight: "bold", color: Colors.black}}>Головна мета проекту "Добро" </Text> 
          - це допомога 
          літнім людям. Велика кількість бабусів та 
          дідусів потребують уваги, багато хто з них 
          залишилися на одинці. Наш додаток націленний 
          на допомогу цим людям.
        </Text>
      </View>
      <View style={{marginBottom: 20}}>
        <BoldText>Засновник проекту</BoldText>
      </View>
      <View>
        <Image
          source={require('../assets/images/ceo2.png')} 
          style={{width: '100%', height: 300, borderRadius: 8}} 
        />
        <View style={{marginTop: 10, marginBottom: 20}}>
          <Text
            style={{
              textAlign: 'center', 
              fontWeight: '500', 
              fontSize: FontSize.label, 
              color: Colors.black
            }}
          >
            Олександр Швець
          </Text>
          <Text
            style={{
              textAlign: 'center', 
              color: Colors.textGrey
              }}
            >
              Меценат, засновник проекту "Добро"
            </Text>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <BoldText>Наша команда</BoldText>
      </View>
      <View>
        <Image
          source={require('../assets/images/dima.jpeg')} 
          style={{width: '100%', height: 300, borderRadius: 8}} 
        />
        <View style={{marginTop: 10, marginBottom: 20}}>
          <Text
            style={{
              textAlign: 'center', 
              fontWeight: '500', 
              fontSize: FontSize.label, 
              color: Colors.black
            }}
          >
            Дмитро Петляк
          </Text>
          <Text
            style={{
              textAlign: 'center', 
              color: Colors.textGrey
              }}
            >
              Front-end розробник
            </Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/images/stas.jpg')} 
          style={{width: '100%', height: 300, borderRadius: 8}} 
        />
        <View style={{marginTop: 10, marginBottom: 20}}>
          <Text
            style={{
              textAlign: 'center', 
              fontWeight: '500', 
              fontSize: FontSize.label, 
              color: Colors.black
            }}
          >
            Діденко Станіслав
          </Text>
          <Text
            style={{
              textAlign: 'center', 
              color: Colors.textGrey
              }}
            >
              Back-end розробник
            </Text>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <BoldText>Ми в соціальних мережах</BoldText>
      </View>
      <View style={{marginBottom: 40}}>
        <TextButton text='Facebook' buttonAction={() => openLinkHandler('facebook')} style={{paddingVertical: 10}} />
        <TextButton text='Instagram' buttonAction={() => openLinkHandler('instagram')} style={{paddingVertical: 10}} />
        <TextButton text='Twitter' buttonAction={() => openLinkHandler('twitter')} style={{paddingVertical: 10}} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default AboutScreen;