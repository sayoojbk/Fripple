import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ProfileCard from '../cards/CompanyProfileCard'
import Carousel from 'react-native-snap-carousel';

const data = [{
  uri: 'https://www.linkpicture.com/q/danilo-capece-NoVnXXmDNi0-unsplash.jpg',
  designation: 'Designer',
  title: "Wear the best",
  likes: '13.5k',
  comments: 345,
},{
  uri: 'https://www.linkpicture.com/q/alexander-rotker-l8p1aWZqHvE-unsplash.jpg',
  designation: 'Designer',
  title: "Blue Heaven",
  likes: '9.5k',
  comments: 321,
}]

export default function CompanyPostTab() {
  return (

    <Carousel
      // ref={(c) => { this._carousel = c; }}
      layout={'default'} 
      layoutCardOffset={18}
      data={data}
      renderItem={ProfileCard}
      sliderWidth={400}
      itemWidth={400}
    />
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