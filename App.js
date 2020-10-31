// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './components/LoginScreen/LoginScreen';
import User from './user';
import Company from './index';


export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return <AppContainer />;
  }
}

// const AppNavigator = createStackNavigator( {
//   Login: {
//     screen: LoginScreen,
//   },
//   UserProfile: {
//     screen: User
//   },
//   CompanyProfile: {
//     screen: Company
//   },
// },);

// const AppContainer = createAppContainer(AppNavigator);

const AppNavigator = createStackNavigator(
  {
    Login:LoginScreen,
    UserProfile: User,
    CompanyProfile: Company,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
        height:0
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
);

const AppContainer = createAppContainer( AppNavigator );
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
