import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default  class CardsScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        DATA : [
          { id: 1, title: 'Lorem ipsum dolor sit amet, everti rationibus his cu', views:'200', comments:'9', published:'4h ago', image: {uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'} },

          { id: 2, title: 'Lorem ipsum dolor sit amet, everti rationibus his ', Views:'700', comments:'16', published:'9h ago', image: {uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'} },

          { id: 3, title: 'Lorem ipsum dolor sit amet, everti rationibus hi', Views:'698', comments:'8', published:'14h ago', image: {uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg'} },
        ],
      }
  }
  render() {
    return (
      <Container>
        <Content>
        {this.state.DATA.map((item, index) => {
          return(
            <Card key={index} >
              <CardItem>
                <Left>
                  <Thumbnail  source={item.image}/>
                  <Body>
                    <Text>{item.title}</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                 <Image source={item.image} style={{height: 200, width: null, flex: 1}} />
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>{item.views}</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>{item.comments}</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>{item.published}</Text>
                </Right>
              </CardItem>
            </Card>
          );
        })}
        </Content>
      </Container>);
  }
}

