import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../home/view';

const HomeStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen }
})

export default createAppContainer(HomeStack);