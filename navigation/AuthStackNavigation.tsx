import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import CodeScreen from '../screens/CodeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

export type AuthStackParamList = {
  Main: object | undefined;
  Registration: object | undefined;
  Login: object | undefined;
  Code: object | undefined;
  Forgot: object | undefined;
  Reset: object | undefined;
}

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

const AuthStackScreen = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  
  return (
    <AuthStackScreen.Navigator screenOptions={({}) => ({
      initialRouteName: 'Main'
    })}
    >
      <AuthStackScreen.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: '',
          ...mainScreenOptions,
        }}
      />

      <AuthStackScreen.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          title: 'Реєстрація',
          ...mainScreenOptions,
        }}
      />

      <AuthStackScreen.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Вхід',
          ...mainScreenOptions,
        }}
      />

      <AuthStackScreen.Screen
        name="Code"
        component={CodeScreen}
        options={{
          title: 'Реєстрація',
          ...mainScreenOptions,
        }}
      />

      <AuthStackScreen.Screen
        name="Forgot"
        component={ForgotPasswordScreen}
        options={{
          title: 'Забули пароль',
          ...mainScreenOptions,
        }}
      />

      <AuthStackScreen.Screen
        name="Reset"
        component={ResetPasswordScreen}
        options={{
          title: 'Відновлення паролю',
          ...mainScreenOptions,
        }}
      />

    </AuthStackScreen.Navigator>
  )
}