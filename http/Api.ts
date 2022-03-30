import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Api } from '../constants/ApiUrl';

export const fetchLoginToken = async (login: string, password: string) => {

  try {
    const { data: response } = await axios({
      url: Api.url + 'Auth/login/',
      method: 'post',
      data: {
        email: login,
        password: password
      }
    })
    return response.securityToken;
  } catch (error) {
    console.log(error);
  }
}

export const fetchRegistration = async (
  name: string, 
  surname: string, 
  email: string, 
  phoneNumber: string, 
  password: string, 
  confirmPassword: string) => {
    try {
      const { data: response } = await axios({
        url: Api.url + 'Auth/register',
        method: 'post',
        data: {
          sName: surname,
          fName: name,
          pName: '',
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          confirmPassword: confirmPassword
        }
      })
      console.log('this is message from registration: ', response);
      return response;
    } 
    catch (error) {
      console.log(error);
  }
}

export const sendVerifyToken = async(token: string) => {
  try {
    const { data: response } = await axios({
      url: Api.url + 'Auth/verify',
      method: 'post',
      data: {
        token: token
      }
    })
    console.log('verify token: ', response);
    return response;
  } 
  catch (error) {
    console.log(error);
  }
}