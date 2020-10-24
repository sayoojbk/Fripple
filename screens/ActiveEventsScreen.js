import { Button, View } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons';
import CardList from "react-native-card-animated-modal";
 


export default function App({ navigation }) {
    // floating add button
    // react native cards of events with participate button
  return (
    <SafeAreaView style={styles.container}>
      <FloatingAction
        floatingIcon={<Ionicons name={'ios-add'} size={30} color={'white'}/>}
        color={'#5E5757'}
        showBackground={false}
        position={'right'}
        onPressMain={()=>navigation.navigate('Add')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FDFDFD',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});