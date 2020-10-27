/* eslint import/no-extraneous-dependencies : off */
import React from "react";
import CardList from "react-native-card-animated-modal";
import Carousel from "react-native-snap-carousel";

import { Dimensions, Image, Text, View } from "react-native";
import ProfileCard from './ProfileCard';

const CARDS =  [
	{
		image: {
			uri: 'https://picsum.photos/50/50'
		},
		height: height * 0.7,
		renderItem: ({ item }) => <ProfileCard />
	},
	{
		image: {
			uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'
		},
		height: height * 0.7,
		renderItem: ({ item }) => <ProfileCard />
	}
];

const { height, width } = Dimensions.get("window");
const now = new Date();

export default class Horizontal extends React.Component {
  render() {
    return (
      <CardList
        ListComponent={Carousel}
        listProps={{
          itemWidth: width - 32,
          sliderWidth: width,
          containerCustomStyle: {
            paddingTop: 16
          }
        }}
        cardContainerStyle={{
          margin: 0
        }}
        header={
          /* eslint react/jsx-wrap-multilines: off */
          <View style={{ padding: '90%', paddingBottom: 0 }}>
          </View>
        }
        data={CARDS}
        renderItem={({ item }) => {
          if (item.renderItem) return item.renderItem({ item });

          return (
            <Image
              source={item.source}
              style={{
                width: "100%",
                height: height * 0.75
              }}
            />
          );
        }}
        renderDetails={() => (
          <View style={{ paddingHorizontal: 30, paddingVertical: 16 }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
              First.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
              Second.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            
          </View>
        )}
      />
    );
  }
}
