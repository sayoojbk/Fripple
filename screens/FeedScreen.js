import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView , View, Image} from 'react-native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import CardImageExample from '../components/feedCard/FeedCard';
import Home from '../components/feedCard/HomeFeed';
import DemoCard from '../components/feedCard/DemoCard';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';



let userName = 'insi.yeah'
export default function App() {
  // let Image_Http_URL ={uri:'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1514474020-tips-for-aspiring-fashion-models.jpg'}
  return (
    <SafeAreaView style={styles.container}>

        
        <View style={styles.logobanner}>
          <Image
            source={require("../assets/images/logo.png")}
            // source={{Image_Http_URL}}
            resizeMode="contain"
            style={styles.logo}
          >
          </Image>

          
            <Button transparent>
              <Icon active name="share" />
            </Button>
  
        </View>

        {/* <View style={styles.rect}>
            <CardImageExample username={userName}/>
        </View> */}
        {/* <View style={styles.rect3}> */}
          <Home/>
          {/* <DemoCard/> */}
        {/* </View> */}
        

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logobanner : {
    top: 0,
    left: 0,
    width: '100%',
    height: '20%',
    position: "absolute",
    backgroundColor: "rgba(114,105,105,1)",
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
  rect3: {
    width: '100%',
    height: '100%',
    // backgroundColor: "rgba(114,105,105,1)",
    backgroundColor:'white',
    marginTop: '30%',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30
  },
  image3: {
    width: 271,
    height: 165,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
  ,
  scrollView: {
    // flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
