import React, { Component,Alert  } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

// username: NativeBase
// bio: GeekyAnts

const userData = [
  {
    image:{
      uri:'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'
    },
    username:'Inzi Zam',
    bio:'Khatna Director'
  },
  {
    image:{
      uri:'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'
    },
    username:'Inzi Zam',
    bio:'Khatna Director'
  }
]

export default class CardImageExample extends Component {

  constructor(props) {
    super(props);
    this.function_call = this.function_call.bind(this);
  }
  function_call() {
    // Alert.alert(
    //   "Alert Title",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ],
    //   { cancelable: false }
    // );
  }
  render(props) {
    return (
      <Container style={{backgroundColor:'#FFFFFF'}} >
        {/* <Header /> */}
        <Content style={{width:'80%', alignSelf:'center', paddingTop:'5%'}}>
          <Card style={{ borderRadius: 30 }} >
            <CardItem header bordered style={{ backgroundColor: "#e2dada",height:'25%', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
              <Left>
                <Thumbnail source={{uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'}} />
                <Body>
                  <Text>{this.props.username}</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem button onPress={this.function_call} cardBody >
              <Image source={{uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem header bordered style={{ backgroundColor:"#e2dada",height:'15%',  borderBottomLeftRadius:30,borderBottomRightRadius:30 }}>
              <Left>
                <Button transparent >
                  <Icon active name="heart" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Left>
                <Button transparent>
                  <Icon active name="share" />
                  <Text >4</Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}