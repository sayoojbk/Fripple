import { Button, View } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App( {navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add form</Text>
    </SafeAreaView>
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