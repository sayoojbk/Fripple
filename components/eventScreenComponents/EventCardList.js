/* eslint import/no-extraneous-dependencies : off */
import React from "react";
import CardList from "react-native-card-animated-modal";

import { Dimensions, Image, Text, View } from "react-native";
import EventCard from './EventCard';

const CARDS =  [
	{
		image: {
			uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'
		},
		height: height * 0.7,
		renderItem: ({ item }) => <EventCard />
	},
	{
		image: {
			uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'
		},
		height: height * 0.7,
		renderItem: ({ item }) => <EventCard />
	}
];

const { height } = Dimensions.get("window");
const now = new Date();

export default class Vertical extends React.Component {
  render() {
    return (
      <CardList
        listProps={{
          ListHeaderComponent: () => (
            <View style={{ padding: 16, paddingBottom: 0 }}>
              <Text
                style={{
                  fontSize: 13,
                  color: "rgba(0, 0, 0, 0.5)"
                }}
              >
                {now.toDateString()}
              </Text>
              <Text style={{ fontSize: 32, fontWeight: "bold" }}>Featured</Text>
            </View>
          )
        }}
        data={CARDS}
        detailsContainerStyle={{ borderRadius: 0 }}
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
          <View
            style={{
              paddingVertical: 36,
              paddingHorizontal: 16
            }}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 
            </Text>

          </View>
        )}
      />
    );
  }
}
