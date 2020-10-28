const result = this.props.articles.map((item, index) => (
    <Card key={index}>
      <CardItem header bordered>
        <Text>{item.title}</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{item.body}</Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Text>GeekyAnts</Text>
      </CardItem>
    </Card>
  ));

  return (
    <Container>
      <Content>{result}</Content>
    </Container>
  );


// IMP ARTICLE : https://stackoverflow.com/questions/63973038/list-of-cards-in-react-native-paper

// REact native Base article 
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Icon, Text, Right } from "native-base";
const items = [
  {
    iconName: "logo-googleplus",
    text: "Google Plus"
  },
  {
    iconName: "logo-facebook",
    text: "Facebook"
  },
  {
    iconName: "logo-twitter",
    text: "Twitter"
  },
  {
    iconName: "logo-reddit",
    text: "Reddit"
  },
  {
    iconName: "logo-linkedin",
    text: "LinkedIn"
  },
];
export default class DynamicCardExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card
            dataArray={items}
            renderRow={item =>
              <CardItem button>
                <Icon active name={item.iconName} />
                <Text>{item.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </CardItem>
            }
          />
        </Content>
      </Container>
    );
  }
}