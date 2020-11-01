import React, { Component } from 'react';
import { AppRegistry, Image,StyleSheet,ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Constants from 'expo-constants';


export default  class DemoCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        DATA : [
          { id: 1, username:'insi.yeaah', title: 'Fashion Blogger , Vogue', views:'200', comments:'9', published:'4h ago', image: {uri: 'https://www.linkpicture.com/q/LPic5f9e863ec89f81783236743.jpg'} },

          { id: 2, username:'Sarah', title: 'Fashion Designer, H&M', Views:'700', comments:'16', published:'9h ago', image: {uri: 'https://www.linkpicture.com/q/LPic5f9e86e60cf0b963260611.jpg'} },

          { id: 3, username:'Lorenzo', title: 'Fashion Model', Views:'698', comments:'8', published:'14h ago', image: {uri: 'https://www.linkpicture.com/q/LPic5f9e87111f2121944458716.jpg'} },
          { id: 4, username:'Jessica Alba', title: 'Influencer', Views:'698', comments:'8', published:'14h ago', image: {uri: 'https://www.linkpicture.com/q/LPic5f9e877c9df1f1280774835.jpg'} },
        ],
      }
  }
  render() {
    return (
    // <ScrollView
    //     contentContainerStyle={styles.scrollView}
    //     // refreshControl={
    //     //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     // }
    //   >
      <Container style={styles.container}>
        <Content style={{width:'100%', alignSelf:'center', paddingTop:'5%', elevation:0}}>
        {this.state.DATA.map((item, index) => {
          return(
            <Card key={index} style={{ alignSelf:'center',width:'75%', borderRadius: 30 ,marginBottom:20, elevation:0, shadowColor:'#FFFFFF'}}>
              {/* <CardItem>
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
              </CardItem> */}


              {/* The final one  */}
              <CardItem header style={{ backgroundColor: "#ffffff",height:80}}>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text>{item.username}</Text>
                  <Text note>{item.title}</Text>
                </Body>
              </Left>
              </CardItem>
              <CardItem  cardBody >
                    <Image source={item.image} style={{height: 200, width: null, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}/>
              </CardItem>
              <CardItem header bordered style={{ backgroundColor:"#e2dada",height:50,  borderBottomLeftRadius:30,borderBottomRightRadius:30 }}>
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
          );
        })}
        </Content>
      </Container>);
    //   </ScrollView>);
  }
}


const styles = StyleSheet.create({
    container: {
    //   flex:1,
      width:'100%',
      backgroundColor:'#FFFFFF',
      marginTop: Constants.statusBarHeight*0.3,
    },
    // scrollView: {
    //   flex:1,
    //   backgroundColor: 'pink',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    scrollView: {
        width:'100%',
        flex:1,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
  });