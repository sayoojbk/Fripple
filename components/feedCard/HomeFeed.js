import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import DemoCard from '../feedCard/DemoCard';
import { Left } from 'native-base';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    // <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      >
        <Text style={[styles.titleText, {textAlign: 'left'}]}>Your Feed</Text>
        {/* <Text>Pull down to see RefreshControl indicator</Text> */}
        <DemoCard/>
      </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginTop: Constants.statusBarHeight,
    marginTop: '30%',
    flex:1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30
  },
  titleText:{
    fontFamily:'Roboto',
    marginTop:20,
    width:'100%',
    // textAlign:'left',
    marginLeft:100,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Home;
