import React, { Component } from 'react';
import { Text, Image, View, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import data from './data.json';


const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <Text style={{ margin: 15, fontWeight: 'bold' }}> 
        {props.title} 
      </Text>
      <TouchableOpacity onPress={props.onNext} style={{ margin: 15 }}>
        <View>
          <Text style={{ color: 'blue' }}>
            Next
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


function _keyExtractor(item, index) {
  return item.name;
} 

const _renderItem = ({ item }) => (
  <TouchableOpacity style={styles.miniImageContainer}> 
    <View>
      <Image source={{ uri: item.url }} style={styles.miniImage} />
    </View>
  </TouchableOpacity>
);

export default function AddForm() {
  return(
    <View style={styles.container}>
        <Header title={"Add post"} />
        <ScrollView>
          <View style={styles.mainImageContainer}>
            <Text>Select an image</Text>
          </View>
          <FlatList data={data.images} keyExtractor={_keyExtractor} renderItem={_renderItem} numColumns={3} />
        </ScrollView>
      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  mainImageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage: {
    width: '100%',
    height: '100%',
    margin: 5
  },
  miniImageContainer: {
    width: 100,
    height: 100,
    margin: 5
  },
  miniImage: {
    width: 100,
    height: 100
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop: 20
  }
});