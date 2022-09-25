import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';


import Chart from '../Screens/ChartScreen';
import Settings from '../Screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='index'>
        <Stack.Screen 
        options={{
          headerShown:false
        }}
        name='home' component={Chart} />
        <Stack.Screen 
        options={{
          headerShown:false,
        }}
        name='settings' component={Settings} />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return(
    <Tab.Navigator initialRouteName='index'>
      <Tab.Screen name='Chart'
      component={HomeStack}
      options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarIcon: () => (
          <Image source={require('../Assets/icons/home.png')} />
        )
      }}
      />
      <Tab.Screen name='Settings'
      component={Settings}
      options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarIcon: () => (
          <Image source={require('../Assets/icons/settings.png')} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const AppNavigationContainer = () => {
    return(
        <AppTabs />
    )
}

export default AppNavigationContainer;