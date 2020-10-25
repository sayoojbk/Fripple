import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'black'}} >
        {/* <Header /> */}
        <Content style={{width:'80%', alignSelf:'center', paddingTop:'5%'}}>
          <Card style={{ borderRadius: 30 }}>
            <CardItem header bordered style={{ height:'20%', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius:30,borderBottomRightRadius:30 }}>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody >
              <Image source={{uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem header bordered style={{ height:'15%', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomLeftRadius:30,borderBottomRightRadius:30 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Right>
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