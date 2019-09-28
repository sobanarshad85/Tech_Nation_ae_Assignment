import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../modules/home/view';
import DummyScreen from '../dummy.js';
import Icon from '../components/icons';
import colors from '../config/colors';

const size=26
const HomeStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen,
    navigationOptions:{
        title:'Home',
        headerTitleStyle:{
            textAlign:'center',
            flex:1,
            fontSize:24,
        }
    } }
})
const MainNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type='AntDesign' name='dashboard' color={tintColor} size={size+2} />
            )
        },
    },
    Second: {
        screen: DummyScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type='AntDesign' name='home' color={tintColor} size={size+2} />
            )
        }
    },
    Third: {
        screen: DummyScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type='AntDesign' name='bells' color={tintColor} size={size+2} />
            )
        }
    },
    Forth: {
        screen: DummyScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type='Fontisto' name='hipchat' color={tintColor} size={size-1} />
            )
        }
    },
    Fifth: {
        screen: DummyScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type='EvilIcons' name='user' color={tintColor} size={size+11} />
            )
        }
    },
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            // backgroundColor: 'yellow',
        },
        activeTintColor: colors.red,
        inactiveTintColor: colors.gray
    }
    })


export default createAppContainer(MainNavigator);