import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import LoginScreen from "react-native-login-screen";

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
      {/* // <SafeAreaView> */}
        <LoginScreen />
      </SafeAreaView>
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