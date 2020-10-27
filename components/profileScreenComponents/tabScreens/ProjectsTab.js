import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ProfileCard from '../cards/ProfileCard'
import Carousel from 'react-native-snap-carousel';

const data = [{
  uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg',
  title: 'Designer',
  username: 'Sarah Parker'
},{
  uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg',
  title: 'Designer',
  username: 'Sarah Parker'
}]

export default function ProjectsTab() {
  return (
    <Carousel
      // ref={(c) => { this._carousel = c; }}
      layout={'stack'} 
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