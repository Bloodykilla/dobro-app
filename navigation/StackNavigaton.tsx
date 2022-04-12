import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import HistoryDetailsScreen from '../screens/HistoryDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import NeedyPersonScreen from '../screens/NeedyPersonScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentHistoryScreen from '../screens/PaymentHistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AchievemntScreen from '../screens/AchievemntScreen';
import AboutScreen from '../screens/AboutScreen';
import DonateScreen from '../screens/DonateScreen';
import ThankYouPage from '../screens/ThankYouPage';

export type HomeStackParamList = {
  Home: object | undefined;
  NeedyPerson: object | undefined;
  Payment: object | undefined;
  Thanks: object | undefined;
};

export type PaymentsStackParamList = {
  PaymentHistory: object | undefined;
  HistoryDetails: object | undefined;
};

export type ProfileStackParamList = {
  Profile: object | undefined;
  Settings: object | undefined;
  Achievement: object | undefined;
  AboutProject: object | undefined;
  Donate: object | undefined;
};

const mainScreenOptions = {
  headerTitleAlign: 'center', 
  headerStyle: {
    backgroundColor: Colors.white,
    elevation: 0, 
    shadowOpacity: 0,
    borderBottomWidth: 0,
    shadowOffset: { 
      height: 0, 
      width: 0 
    },
  },
  headerBackTitle: 'Назад',
  headerBackTitleStyle: {
    color: Colors.black
  },
  headerTintColor: Colors.black,
  headerTitleStyle: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    color: Colors.black
  }
}

const HomeStackScreen = createStackNavigator<HomeStackParamList>();
const PaymentStackScreen = createStackNavigator<PaymentsStackParamList>();
const ProfileStackScreen = createStackNavigator<ProfileStackParamList>();

export const HomeStackNavigator = () => {
  
  return (
    <HomeStackScreen.Navigator screenOptions={({}) => ({
      initialRouteName: 'Home'
    })}
    >
      <HomeStackScreen.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Головна',
          ...mainScreenOptions,
        }}
      />

      <HomeStackScreen.Screen
        name="NeedyPerson"
        component={NeedyPersonScreen}
        options={{
          title: 'Головна',
          ...mainScreenOptions,
        }}
      />

      <HomeStackScreen.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: 'Допомога',
          ...mainScreenOptions,
        }}
      />  

      <HomeStackScreen.Screen
        name="Thanks"
        component={ThankYouPage}
        options={{
          title: 'Допомога',
          ...mainScreenOptions
        }}
      />

    </HomeStackScreen.Navigator>
  )
}

export const PaymentHistoryStackNavigator = () => {

  return (
    <PaymentStackScreen.Navigator screenOptions={({}) => ({
      initialRouteName: 'PaymentHistory'
    })}
    >
      <PaymentStackScreen.Screen
        name="PaymentHistory"
        component={PaymentHistoryScreen}
        options={{
          title: 'Мої платежі',
          ...mainScreenOptions,
        }}
      />

     <PaymentStackScreen.Screen
        name="HistoryDetails"
        component={HistoryDetailsScreen}
        options={{
          title: 'Деталі',
          ...mainScreenOptions,
        }}
      />

    </PaymentStackScreen.Navigator>
  )
}

export const ProfileStackNavigator = () => {
  
  return (
    <ProfileStackScreen.Navigator screenOptions={({}) => ({
      initialRouteName: 'Profile'
    })}
    >
      <ProfileStackScreen.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Мій профіль',
          ...mainScreenOptions,
        }}
      />

      <ProfileStackScreen.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Налаштування',
          ...mainScreenOptions,
        }}
      />

      <ProfileStackScreen.Screen
        name="Achievement"
        component={AchievemntScreen}
        options={{
          title: 'Досягнення',
          ...mainScreenOptions,
        }}
      />

      <ProfileStackScreen.Screen
        name="AboutProject"
        component={AboutScreen}
        options={{
          title: 'Про проект',
          ...mainScreenOptions,
        }}
      />

      <ProfileStackScreen.Screen
        name="Donate"
        component={DonateScreen}
        options={{
          title: 'Підтримати нас',
          ...mainScreenOptions,
        }}
      />  

    </ProfileStackScreen.Navigator>
  )
}
