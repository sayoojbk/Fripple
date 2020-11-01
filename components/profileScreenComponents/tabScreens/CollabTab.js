import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ProfileCard from '../cards/ProfileCard'
import Carousel from 'react-native-snap-carousel';

const data = [{
  uri: 'https://www.linkpicture.com/q/wang-yan-QY0qR938qL8-unsplash.jpg',
  designation: 'Designer',
  title: "ORANGE!!!",
  username: 'Sarah Parker',
  fireCount: 68,
  text: "Parturient curabitur consectetur a suspendisse metus suspendisse a a et ullamcorper maecenas curabitur parturient blandit enim tellus consectetur pharetra natoque adipiscing a rhoncus maecenas massa fringilla.Gravida ullamcorper suspendisse mi condimentum ligula tincidunt ut ut facilisi adipiscing pulvinar a a sed ante congue turpis class condimentum cubilia.Eu tellus dapibus nisl eros scelerisque fringilla dolor suspendisse parturient eros habitasse phasellus euismod a fermentum porttitor a taciti sapien euismod augue parturient dapibus conubia scelerisque quisque at non.Nulla sociosqu parturient a."

},{
  uri: 'https://www.linkpicture.com/q/tamara-bellis-0C2qrwkR1dI-unsplash.jpg',
  designation: 'Designer',
  title: "Black in style",
  username: 'Sarah Parker',
  fireCount: 83,
  text: "Parturient curabitur consectetur a suspendisse metus suspendisse a a et ullamcorper maecenas curabitur parturient blandit enim tellus consectetur pharetra natoque adipiscing a rhoncus maecenas massa fringilla.Gravida ullamcorper suspendisse mi condimentum ligula tincidunt ut ut facilisi adipiscing pulvinar a a sed ante congue turpis class condimentum cubilia.Eu tellus dapibus nisl eros scelerisque fringilla dolor suspendisse parturient eros habitasse phasellus euismod a fermentum porttitor a taciti sapien euismod augue parturient dapibus conubia scelerisque quisque at non.Nulla sociosqu parturient a."

}]

export default function CollabTab() {
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