import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import FeedScreen from './screens/FeedScreen';
import NotifScreen from './screens/NotifScreen';


function DefaultScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Default!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
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
              case 'Add':
                iconName = 'ios-add-circle';
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
        <Tab.Screen name="Add" component={ DefaultScreen } />
        <Tab.Screen name="Notifications" component={ NotifScreen } />
        <Tab.Screen name="Profile" component={ ProfileScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}