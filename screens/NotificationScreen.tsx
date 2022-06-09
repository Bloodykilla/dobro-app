import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import Plug from '../components/Plug';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';

interface NotificationScreenProps {

}

const NotificationScreen: React.FC<NotificationScreenProps> = ({}) => {
  
  return (
    <Layout
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text
          style={
            {
              textAlign: 'center', 
              color: Colors.textGrey,
              fontSize: FontSize.label
            }
          }
        >
          У вас відсутні сповіщення.
        </Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{

  },
});

export default NotificationScreen;