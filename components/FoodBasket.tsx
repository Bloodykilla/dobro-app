import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface FoodBasketProps {
  foodRest: number | undefined;
  foodDesc: string | undefined;
}

const FoodBasket: React.FC<FoodBasketProps> = ({ foodRest, foodDesc }) => {
  
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{foodDesc}</Text>
      </View>
      <View style={styles.basketContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/basket.png')} />
        </View>
        <View style={styles.boldTextContainer}>
          <Text style={styles.boldText}>{foodRest} грн.</Text>
        </View>
        <View>
          <Text style={styles.smallText}>Залишилося зібрати в цьому місяці</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    borderWidth: 2,
    borderColor: Colors.red,
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 16
  },
  text: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: FontSize.middle
  },
  basketContainer: {
    marginVertical: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  boldTextContainer: {
    paddingTop: 20
  },
  boldText: {
    fontSize: FontSize.hero,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.black
  },
  smallText: {
    fontWeight: '400',
    fontSize: FontSize.middle,
    color: Colors.textGrey,
    textAlign: 'center'
  }
});

export default FoodBasket;