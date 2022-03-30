import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomTab from '../components/CustomTab';
import DetailsButton from '../components/DetailsButton';
import Layout from '../components/Layout';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface NeedyPersonScreenProps {

}

const NeedyPersonScreen: React.FC<NeedyPersonScreenProps> = ({}) => {
  const [expand, setExpand] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);

  const onSelectSwitch = (index: number) => {
    setSelectedOption(index);
  };

  const expandButtonHandler = () => {
    setExpand(!expand);
  };

  return (
    <Layout>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn6USmgH1wGZLBDIORQceww5BLFaQRsGsow&usqp=CAU'}}
            style={styles.image}
          /> 
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.personTitle}>Валерій Альбертович</Text>
      </View>
      <View style={styles.acordion}>
        <View>
          <Text style={styles.aboutNeedy}>Про нужденного:</Text>
        </View>
        <DetailsButton buttonAction={() => expandButtonHandler()}/>
      </View>
      <View 
        style={expand ? styles.descContainerExpand : styles.descContainerColapse}
      >
        <Text style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis 
          aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit 
          anim id est laborum.
        </Text>
      </View>
      <View style={styles.tabContainer}>
        <CustomTab
          activeСollection={true}
          foodBasket={true}
          onSelectSwitch={onSelectSwitch}
          optionNameActive='Активний збір' 
          optionNameFood='Продуктовий кошик'
        />
      </View>
      <View>
        
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 320,
    borderRadius: 8
  },
  imageContainer: {
    marginTop: 30
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 40
  },
  personTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontSize.big,
    color: Colors.black
  },
  aboutNeedy: {
    fontWeight: '500',
    color: Colors.black,
    fontSize: FontSize.label
  },
  acordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descContainerColapse: {
    marginTop: 22,
    maxHeight: 90
  },
  descContainerExpand: {
    marginTop: 22,
  },
  descText: {
    fontWeight: '400',
    color: Colors.black,
    fontSize: FontSize.regular
  },
  tabContainer: {
    marginTop: 20,
    marginBottom: 40
  }
});

export default NeedyPersonScreen;