import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ActiveEventsScreen from './ActiveEventsScreen'
import AddForm from './AddForm'


const Stack = createStackNavigator();


export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Active Events' component={ ActiveEventsScreen }/>
            <Stack.Screen name='Add' component={ AddForm }/>
        </Stack.Navigator>        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});