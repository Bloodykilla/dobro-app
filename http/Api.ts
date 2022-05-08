import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Api } from '../constants/ApiUrl';

// export const fetchRegistration = async (
//   name: string, 
//   surname: string, 
//   email: string, 
//   phoneNumber: string, 
//   password: string, 
//   confirmPassword: string) => {
//     let formattedPhone;
//     if (phoneNumber) {
//       phoneNumber = phoneNumber?.replace(/[(\)(/\s)(/\-)(/\+)]/g, '');
//       formattedPhone = phoneNumber.substring(0, 12);
//     }
//     try {
//       const { data: response } = await axios({
//         url: Api.url + Api.auth + '/register/',
//         method: 'post',
//         data: {
//           sName: surname,
//           fName: name,
//           pName: '',
//           email: email,
//           phoneNumber: formattedPhone,
//           password: password,
//           confirmPassword: confirmPassword
//         }
//       })
//       return response;
//     } 
//     catch (error) {
//       console.log(error);
//   }
// };

export const sendVerifyToken = async(token: string) => {
  try {
    const { data: response } = await axios({
      url: Api.url + Api.auth + '/verify/',
      method: 'post',
      data: {
        token: token
      }
    })
    return response;
  } 
  catch (error) {
    console.log(error);
  }
};

export const fetchNeedyPersons = async(
  token: string, 
  city: string | null, 
  quantity: number
  ) => {
  let key = await AsyncStorage.getItem('last_session');
  const { data:response } = await axios({
    url: Api.url + Api.customer + '/getpersons/',
    method: 'get',
    params: {
      city: city,
      quantity: quantity
    },
    headers: { 
      Authorization: `Bearer ${token || key}` 
    }
  })
  return response
};

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
      Authorization: `Bearer ${token || key}` 
    }
  })
  return response
};

export const fetchCustomerPayments = async(token: string, timecode: number) => {
  let key = await AsyncStorage.getItem('last_session');
  const {data:response} = await axios({
    url: Api.url + Api.customer + '/getmypayments/',
    method: 'get',
    params: {
      timecode: timecode
    },
    headers: {
      Authorization: `Bearer ${token || key}`
    }
  })
  return response;
};

export const fetchCustomerInfo = async(token: string) => {
  let key = await AsyncStorage.getItem('last_session');

  const {data:response} = await axios({
    url: Api.url + Api.customer + '/getmyinfo/',
    method: 'get',
    headers: {
      Authorization: `Bearer ${token || key}`
    }
  })
  return response;
};

export const changeCustomerInfo = async(
  fname: string | null, 
  sname: string | null, 
  phone: string | null, 
  token: string
  ) => {
  let key = await AsyncStorage.getItem('last_session');

  const {data:response} = await axios({
    url: Api.url + Api.customer + '/editmyinfo/',
    method: 'post',
    data: {
      fName: fname,
      sName: sname,
      pName: null,
      phoneNumber: phone,
      image: null
    },
    headers: { 
      Authorization: `Bearer ${token || key}` 
    }
  });
  console.log(response);
  return response;
};
