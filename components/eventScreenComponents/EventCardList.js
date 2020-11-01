/* eslint import/no-extraneous-dependencies : off */
import React from "react";
import CardList from "react-native-card-animated-modal";

import { Dimensions, Image, Text, View } from "react-native";
import EventCard from './EventCard';

const CARDS =  [
	{
		image: {
			uri: 'https://www.linkpicture.com/q/LPic5f9e84947006a1233657452.jpg'
		},
		height: height * 0.7,
		renderItem: ({ item }) => <EventCard />
	},
	{
		image: {
			uri: 'https://www.linkpicture.com/q/LPic5f9e854208cfa646116451.jpg'
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
              ------
              ----------
              ---------
              ----------
              ---------
              ------------------------
              -
              
              FILA FASHION WEEK 
              ---------------------------------
              Show your creative touch with different ways you could flaunt our bumblebee sweat shirts.
              The Winner of this event stand a chance to be featured on our page and perform gigs with our creative heads.
            </Text>

          </View>
        )}
      />
    );
  }
}
