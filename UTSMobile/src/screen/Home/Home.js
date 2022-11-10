import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeInput from '../HomeInput/HomeInput';
import HomeResult from '../HomeResult/HomeResult';
import InputLogo from '../../../assets/images/bodybuilder-icon-24.jpg';
import InfoLogo from '../../../assets/images/info-icon--6.png';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Input"
        component={HomeInput}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={InputLogo}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#e32f45' : '#758c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Result"
        component={HomeResult}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={InfoLogo}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#758c94',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#404258',
  },
});

export default Home;
