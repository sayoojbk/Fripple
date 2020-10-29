import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import LoginScreen from '../screens/LoginScreen';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
      <LoginScreen/>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});