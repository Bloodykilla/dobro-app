import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthStackNavigator } from './AuthStackNavigation';

export type MainTabParamList = {
  Auth: object | undefined;
  Register: object | undefined;
  MainScreen: object | undefined;
}

interface TabNavigatorProps {

}

const Tab = createBottomTabNavigator<MainTabParamList>();

const hideBottomTabOptions = {
  display: 'none'
}

const AuthNavigator: React.FC<TabNavigatorProps> = ({}) => {

  return (
    <NavigationContainer>
      <Tab.Navigator 
          initialRouteName='MainScreen'
          screenOptions={{
          tabBarStyle: 
            {display: 'none'}
        }}
      >
      <Tab.Screen
        name='MainScreen'
        component={AuthStackNavigator}
        options={{
          title: '',
          headerShown: false,
          tabBarButton: () => null,
          tabBarHideOnKeyboard: true
         }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;