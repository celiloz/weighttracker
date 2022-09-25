import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigatorContainer from './src/Router/AppRouter';

const App = () => {
  return (
    <NavigationContainer>
    <AppNavigatorContainer />
  </NavigationContainer>
  );
};

export default App;
