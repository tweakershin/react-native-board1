import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import DetailScreen from './src/screens/DetailScreen';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import SettingScreen from './src/screens/SettingScreen';
import BoardCreateScreen from './src/screens/BoardCreateScreen'


const defaultNavigationOptions = {
  headerTintColor: 'white',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',

    labelStyle: {
      fontSize: 16,
    },
  },
  
};

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen
  },
  BoardCreate: {
    screen: BoardCreateScreen
  }
});


const TabNavigator = createBottomTabNavigator({
  Home:{
    // screen: HomeScreen,
    screen: StackNavigator,
    navigationOptions:{
      title: '홈'
    }
  },
  Setting:{
    screen: SettingScreen
  }
},
{
  defaultNavigationOptions
})

const AppContainer =  createAppContainer(TabNavigator);

export default function App(){
    return(
        <AppContainer/>
    );
}