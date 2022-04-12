import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, PaymentHistoryStackNavigator, ProfileStackNavigator } from './StackNavigaton';

export type HomeTabParamList = {
  HomeTab: object | undefined;
  PaymentHistoryTab: object | undefined;
  ProfileTab: object | undefined;
}

interface TabNavigatorProps {

}

const Tab = createBottomTabNavigator<HomeTabParamList>();

const TabNavigator: React.FC<TabNavigatorProps> = ({}) => {

  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='HomeTab'
      >
      <Tab.Screen
        name='HomeTab'
        component={HomeStackNavigator}
        options={{
          title: 'Головна',
          headerShown: false
         }}
      />

      <Tab.Screen
        name='PaymentHistoryTab'
        component={PaymentHistoryStackNavigator}
        options={{
          title: 'Мої платежі',
          headerShown: false
         }}
      />  

      <Tab.Screen
        name='ProfileTab'
        component={ProfileStackNavigator}
        options={{
          title: 'Мій профіль',
          headerShown: false
         }}
      />  
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;