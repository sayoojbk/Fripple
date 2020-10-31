
import  { Component } from 'react';
import * as Font from 'expo-font'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import FeedScreen from './screens/FeedScreen';
import NotifScreen from './screens/NotifScreen';
import EventScreenNav from './screens/EventScreenNav';
import CompanyProfileScreen from './screens/CompanyProfileScreen'

import LoginScreen from './components/LoginScreen/LoginScreen';

const Tab = createBottomTabNavigator();
export default class Company extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }

  render() {
       if (this.state.loading) {
         return (
           <View></View>
         );
       }
       return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                switch (route.name) {
                  case 'Feed':
                    iconName = 'md-home';
                    break;
                  case 'Search':
                    iconName = 'ios-search';
                    break;
                  case 'Events':
                    iconName = 'ios-disc';
                    break;
                  case 'Notifications':
                    iconName = 'ios-notifications';
                    break;
                  case 'Profile':
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                    break;
                
                  default:
                    break;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: '#5E5757',
            }}
          >
            <Tab.Screen name="Feed" component={ FeedScreen } />
            <Tab.Screen name="Search" component={ SearchScreen } />
            <Tab.Screen name="Events" component={ EventScreenNav } />
            <Tab.Screen name="Notifications" component={ NotifScreen } />
            {/* TODO: Add here. Login redirect */}
            {/* <Tab.Screen name="Profile" component={ ProfileScreen } /> */}
            <Tab.Screen name="Profile" component={ CompanyProfileScreen } />
          </Tab.Navigator>
          
        </NavigationContainer>
        // <LoginScreen/>
      );
   }
}
