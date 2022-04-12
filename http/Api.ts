import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Api } from '../constants/ApiUrl';

export const fetchLoginToken = async (login: string, password: string) => {
  try {
    const response = await axios({
      url: Api.url + Api.auth + '/login/',
      method: 'post',
      data: {
        email: login,
        password: password
      }
    })
    return response.data;
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
        url: Api.url + Api.auth + '/register/',
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
      url: Api.url + Api.auth + '/verify/',
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

export const fetchNeedyPersons = async(
  token: string, 
  city: string, 
  quantity: number
  ) => {
  let key = await AsyncStorage.getItem('last_session');
  const { data:response } = await axios({
    url: Api.url + Api.customer + '/getpersons/',
    method: 'post',
    data: {
      city: city,
      quantity: quantity
    },
    headers: { 
      Authorization: `Bearer ${token || key}` 
    }
  })
  return response
}

export const peyForNeeds = async(
  token: string
  ) => {
  let key = await AsyncStorage.getItem('last_session');
  const { data:response } = await axios({
    url: Api.url + Api.customer + '/addpayment/',
    method: 'post',
    data: {
      needId: '36d33051-4fdc-4dff-8ea7-08da13da1519',
      sum: 200
    },
    headers: { 
      Authorization: `Bearer ${token || key}` 
    }
  })
  console.log(response);
  return response
}

export const payForNeeds = async(needId: string, mount: number, token: string) => {
  let key = await AsyncStorage.getItem('last_session');
  const { data:response } = await axios({
    url: Api.url + Api.customer + '/addpayment/',
    method: 'post',
    data: {
      needId: needId,
      sum: mount
    },
    headers: { 
      Authorization: `Bearer ${token|| key}` 
    }
  })
  return response
}
