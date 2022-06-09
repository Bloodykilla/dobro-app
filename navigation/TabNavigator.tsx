import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, PaymentHistoryStackNavigator, ProfileStackNavigator } from './StackNavigaton';
import { Icons } from '../components/Icons';
import { Colors } from '../constants/Colors';

export type HomeTabParamList = {
  HomeTab: object | undefined;
  PaymentHistoryTab: object | undefined;
  ProfileTab: object | undefined;
}

interface TabNavigatorProps {

}

const Tab = createBottomTabNavigator<HomeTabParamList>();



const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {

  const tabBarListeners = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='HomeTab'
      >
      <Tab.Screen
        name='HomeTab'
        component={HomeStackNavigator}
        listeners={tabBarListeners}
        options={{
          title: 'Головна',
          tabBarIcon: ({ focused }) => {
            return <Icons name={"home"} size={24} color={focused ? Colors.red : Colors.black} />
          },
          tabBarActiveTintColor: Colors.red,
          
          headerShown: false
         }}
      />

      <Tab.Screen
        name='PaymentHistoryTab'
        component={PaymentHistoryStackNavigator}
        listeners={tabBarListeners}
        options={{
          title: 'Мої платежі',
          tabBarIcon: ({ focused }) => {
            return <Icons name={"wallet"} size={24} color={focused ? Colors.red : Colors.black} />
          },
          tabBarActiveTintColor: Colors.red,
          headerShown: false
         }}
      />  

      <Tab.Screen
        name='ProfileTab'
        component={ProfileStackNavigator}
        listeners={tabBarListeners}
        options={{
          title: 'Мій профіль',
          tabBarIcon: ({ focused }) => {
            return <Icons name={"profile"} size={24} color={focused ? Colors.red : Colors.black} />
          },
          tabBarActiveTintColor: Colors.red,
          headerShown: false
         }}
      />  
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;