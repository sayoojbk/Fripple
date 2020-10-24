import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView , View, Image} from 'react-native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import { PostCard} from '../components/card_info';
// import {VerticalScreen} from '../components/feedCard/feedCardList'
import FeedCardList from '../components/feedCard/FeedCardList';
import EventCardList from '../components/eventScreenComponents/EventCardList';

const user_posts= [
  {
    name:'Insi Hajoori',
    bio:'Art Director at Katvi',
    img_uri:'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1514474020-tips-for-aspiring-fashion-models.jpg'
  },
  {
    name:'Insi Hajoori',
    bio:'Art Director at Katvi',
    img_uri:'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1514474020-tips-for-aspiring-fashion-models.jpg'
  }
]
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.rect2}>
          <Image
            source={require("../assets/images/logo.png")}
            // source={{Image_Http_URL}}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
        </View>

        {/* <VerticalScreen />         */}
        {/* <EventCardList /> */}
        <FeedCardList/>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FDFDFD',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    top: 0,
    left: 0,
    width: '100%',
    height: 176,
    position: "absolute",
    backgroundColor: "rgba(114,105,105,1)"
  },
  logo: {
    width: '30%',
    height: '100%',
    marginTop: 11
  },
  rect: {
    top: 145,
    left: 0,
    width: '100%',
    height: 667,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  yourFeed: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    marginTop: 31,
    marginLeft: 48
  },
  image2: {
    width: 50,
    height: 50,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100
  },
  insiyahHajoori: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16
  },
  artDirAtKatvi: {
    fontFamily: "Roboto",
    color: "rgba(101,93,93,1)",
    marginTop: 5
  },
  insiyahHajooriColumn: {
    width: 107,
    marginLeft: 17,
    marginBottom: 9
  },
  image2Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 48,
    marginRight: 153
  },
  rect3: {
    width: 271,
    height: 204,
    backgroundColor: "rgba(114,105,105,1)",
    borderRadius: 30,
    marginTop: 7,
    marginLeft: 48
  },
  image3: {
    width: 271,
    height: 165,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
});
