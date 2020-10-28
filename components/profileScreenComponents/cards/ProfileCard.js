import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { StyleSheet } from 'react-native';

export default function ProfileCard({item, index}) {
  return (
    <Container>
        <Header style={styles.header} />
        <Content style={styles.content}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: item.uri}} />
                <Body>
                  <Text>{item.username}</Text>
                  <Text note>{item.title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: item.uri}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}

// export default class CardImageExample extends Component {
//   render() {
//     console.log(this)
//     console.log(this.props)
//     let props = this.props.props
//     return (
      
//     );
//   }
// }

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width: 0,
    height: 0,
    margin: 0
  },
  content: {
    width: '90%',
    margin: 20
  }
});