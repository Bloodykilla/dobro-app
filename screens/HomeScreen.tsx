import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MapView from 'react-native-maps';
import Button from '../components/Button';
import CustomMarker from '../components/CustomMarker';
import Dropdown from '../components/Dropdown';
import IconButton from '../components/IconButton';
import ModalMenu from '../components/ModalMenu';
import Preloader from '../components/Preloader';
import { Cities } from '../constants/CityArray';
import { Colors } from '../constants/Colors';
import { Context } from '../context/ContextProvider';
import { NeedyPerson } from '../models/NeedyPerson';
import { HomeStackParamList } from '../navigation/StackNavigaton';

interface HomeScreenProps {
  homeStack: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ homeStack }) => {
  const { needyPerson, loading, setUpdate, setChosenCity } = useContext(Context);
  const navigation = useNavigation<typeof homeStack>();
  const [needyArray, setNeedyArray] = useState([NeedyPerson]);
  const iconButtonRef = useRef();
  const [selectedCity, setSelectedCity] = useState('Всі');

  const openMenuHandler = () => {
    iconButtonRef?.current?.open();
  };

  const markerHandler = (item: typeof NeedyPerson) => {
    if (item) {
      setUpdate(false);
      navigation.navigate('NeedyPerson',{
        needyPerson: item
      })
    } else {
      return;
    }
  };

  const filterButtonHandler = () => {
    if (selectedCity) {
      setChosenCity(selectedCity);
    } else {
      Alert.alert('Сталася помилка. Спробуйте ще раз')
    }
  };  

  useEffect(() => {
    if (needyPerson && !loading) {
      setNeedyArray(needyPerson);
    }
  });

  return (
    <>
    {needyArray && !loading ? (
    <View style={styles.container}>
      <MapView
        style={styles.map}
      >
        {needyArray.length > 0 ? (
          <>
          {needyArray?.map((item, index) => (
            <CustomMarker 
              key={index}
              latitude={item?.address?.latitude}
              longitude={item?.address?.longitude}
              imgPath={item?.imageLink}
              buttonAction={() => markerHandler(item)}
            />
            ))
          }
          </>
        )
        : null
        }
      </MapView>
      <View style={styles.iconContainer}>
        <IconButton
          style={styles.iconStyle} 
          size={24} 
          name='sliders' 
          color={Colors.red} 
          buttonAction={() => openMenuHandler()}
        />
        <ModalMenu modalRef={iconButtonRef}>
          <View style={styles.filterContainer}>
            <Text style={{textAlign: 'center', color: Colors.textGrey, paddingBottom: 6}}>Оберіть місто</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Dropdown data={Cities} onSelect={setSelectedCity} label={selectedCity} />
            </View>
            <View style={styles.filterButton}>
              <Button label='Фільтр' buttonAction={() => filterButtonHandler()} /> 
            </View>
          </View>
        </ModalMenu>
      </View>
    </View>
      )
    :
      <Preloader />
    }
    </>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  map: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  },
  iconStyle: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: Colors.white,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginLeft: 'auto',
    marginRight: 16
  },
  filterContainer: {
    marginTop: 40,
    paddingHorizontal: 32,
    flexDirection: 'column',
    flex: 1
  },
  filterButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60
  }
});

export default HomeScreen;