import AsyncStorage from '@react-native-async-storage/async-storage';
import { Route, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import CustomTab from '../components/CustomTab';
import DetailsButton from '../components/DetailsButton';
import FoodBasket from '../components/FoodBasket';
import HelpedMonth from '../components/HelpedMonth';
import Layout from '../components/Layout';
import NeedyCard from '../components/NeedyCard';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import { Context } from '../context/ContextProvider';
import { NeedyPerson } from '../models/NeedyPerson';
import { HomeStackParamList } from '../navigation/StackNavigaton';

interface NeedyPersonScreenProps {
  homeStack: StackNavigationProp<HomeStackParamList>;
  route: {
    params: {
      needyPerson: typeof NeedyPerson
    }
  }
}

const NeedyPersonScreen: React.FC<NeedyPersonScreenProps> = ({ homeStack, route }) => {
  const [expand, setExpand] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);
  const navigaiton = useNavigation<typeof homeStack>();
  const [person, setPerson] = useState(NeedyPerson);
  const {loading} = useContext(Context);

  useEffect(() => {
    if (route?.params?.needyPerson) {
      setPerson(route?.params?.needyPerson);
    }
  }, [route?.params?.needyPerson])


  const onSelectSwitch = (index: number) => {
    setSelectedOption(index);
  };

  const expandButtonHandler = () => {
    setExpand(!expand);
  };

  const redirectButtonHandler = async() => {
    if (selectedOption) {
      navigaiton.navigate('Payment', {
        person: person,
        selectedOption: selectedOption
      })
    }
    else {
      return;
    }
  }

  const getCurrentSum = (person: typeof NeedyPerson) => {
    let sum: number = 0; 
    let current = person?.currentNeed?.currentSum;
    let goal = person?.currentNeed?.goal;
    if (current && goal) {
      sum = (current / goal) * 100;
    }
    return sum.toFixed();
  }

  return (
    <Layout>
      <View>
        <View style={styles.imageContainer}>
          {person?.imageLink !== '' && !loading ? (
            <Image
              source={{uri: person?.imageLink}}
              style={styles.image}
            /> 
          )
          : 
            null
          }
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.personTitle}>{person?.fName} {person?.sName}</Text>
      </View>
      <View style={styles.acordion}>
        <View>
          <Text style={styles.aboutNeedy}>Про нужденного:</Text>
        </View>
        <DetailsButton buttonAction={() => expandButtonHandler()}/>
      </View>
      <View style={expand ? styles.descContainerExpand : styles.descContainerColapse}>
        <Text style={styles.descText}>{person?.story}</Text>
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
        {selectedOption === 1 ? (
          <NeedyCard
            title={person?.currentNeed?.descShort}
            currentProgress={+getCurrentSum(person)}
            rest={person?.currentNeed?.goal - person?.currentNeed?.currentSum}
          />
          )
        :
          <View>
            <Text style={styles.foodBasketText}>Також Ви можете допомогти, придбавши набір продуктів для місячного раціону нужденного.</Text>
            <FoodBasket
              foodRest={person?.basketNeed?.goal - person?.basketNeed?.currentSum}
              foodDesc={person?.basketNeed?.descShort}
            />
          </View>
        }
      </View>
      <View>
        {selectedOption === 1 ? (
          <View style={styles.helpContainer}>
            <HelpedMonth helped={person?.numberOfPeopleDonated} />
          </View>
        )
        :
          null
        }
      </View>
      <View style={styles.buttonContainer}>
        <Button label='Допомогти' buttonAction={() => redirectButtonHandler()} />
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
    marginVertical: 20
  },
  foodBasketText: {
    fontSize: FontSize.regular,
    fontWeight: '500',
    color: Colors.black,
    paddingBottom: 8,
    textAlign: 'center'
  },
  smileImage: {
    width: 40,
    height: 40
  },
  helpContainer: {
    marginTop: 15
  },
  buttonContainer: {
    marginBottom: 45
  }
});

export default NeedyPersonScreen;