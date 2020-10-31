import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

// import LoginScreen from '../screens/LoginScreen';
import LoginScreen from '../components/LoginScreen/LoginScreen';
// import ExplorePage from '../components/featured/ExplorePage';
import FeaturedExplore from '../components/featuredExplore/FeaturedExplore';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
      // <LoginScreen/>
      // <LoginModal/>
      <FeaturedExplore/>
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

