import { Button, View } from 'react-native';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App( {navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Add"
            onPress={() => navigation.navigate('Add')}
        />
      </View>
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