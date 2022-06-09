import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
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
import Bell from '../components/Bell';
import NotificationScreen from '../screens/NotificationScreen';
import ChangeEmailScreen from '../screens/ChangeEmailScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';

export type HomeStackParamList = {
  Home: object | undefined;
  NeedyPerson: object | undefined;
  Payment: object | undefined;
  Thanks: object | undefined;
  Notification: object | undefined;
};

export type PaymentsStackParamList = {
  PaymentHistory: object | undefined;
  Notification: object | undefined;
};

export type ProfileStackParamList = {
  Profile: object | undefined;
  Settings: object | undefined;
  Achievement: object | undefined;
  AboutProject: object | undefined;
  Donate: object | undefined;
  Notification: object | undefined;
  ChangeEmail: object | undefined;
  VerifyEmail: object | undefined;
};

const mainScreenOptions: StackNavigationOptions = {
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
    <HomeStackScreen.Navigator screenOptions={({navigation}) => ({
      initialRouteName: 'Home',
      headerRight: () => {
        return (
          <Bell buttonAction={() => {navigation.navigate('Notification')}}/>
        );
      },
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
          headerLeft: () => null,
          ...mainScreenOptions
        }}
      />

      <HomeStackScreen.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Сповіщення',
          ...mainScreenOptions,
          headerRight: () => null
        }}
      />  

    </HomeStackScreen.Navigator>
  )
}

export const PaymentHistoryStackNavigator = () => {

  return (
    <PaymentStackScreen.Navigator screenOptions={({navigation}) => ({
      initialRouteName: 'PaymentHistory',
      headerRight: () => {
        return (
          <Bell buttonAction={() => {navigation.navigate('Notification')}}/>
        );
      },
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
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Сповіщення',
          ...mainScreenOptions,
          headerRight: () => null
        }}
      />  

    </PaymentStackScreen.Navigator>
  )
}

export const ProfileStackNavigator = () => {
  
  return (
    <ProfileStackScreen.Navigator screenOptions={({navigation}) => ({
      initialRouteName: 'Profile',
      headerRight: () => {
        return (
          <Bell buttonAction={() => {navigation.navigate('Notification')}} />
        );
      },
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

      <ProfileStackScreen.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Сповіщення',
          ...mainScreenOptions,
          headerRight: () => null
        }}
      /> 

      <ProfileStackScreen.Screen
        name="ChangeEmail"
        component={ChangeEmailScreen}
        options={{
          title: 'Зміна ел. пошти',
          ...mainScreenOptions,
        }}
      /> 

      <ProfileStackScreen.Screen
        name="VerifyEmail"
        component={VerifyEmailScreen}
        options={{
          title: 'Зміна ел. пошти',
          ...mainScreenOptions,
        }}
      /> 

    </ProfileStackScreen.Navigator>
  )
}
