import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';
// import AddForm from '../../../screens/AddForm'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';



const Stack = createStackNavigator();

function More(props) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FDFDFD',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{textAlign: 'center'}}>
        Parturient curabitur consectetur a suspendisse metus suspendisse a a et ullamcorper maecenas curabitur parturient blandit enim tellus consectetur pharetra natoque adipiscing a rhoncus maecenas massa fringilla.Gravida ullamcorper suspendisse mi condimentum ligula tincidunt ut ut facilisi adipiscing pulvinar a a sed ante congue turpis class condimentum cubilia.Eu tellus dapibus nisl eros scelerisque fringilla dolor suspendisse parturient eros habitasse phasellus euismod a fermentum porttitor a taciti sapien euismod augue parturient dapibus conubia scelerisque quisque at non.Nulla sociosqu parturient a.
      </Text>
    </View>
  );
}

function MyCard( props ) {
  const item = props.extraData;
  const navigation = props.navigation;

  return (
    <Container>
      <Header style={styles.header} />
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem cardBody style={styles.imagePanel}>
              <Image source={{uri: item.uri}} style={{height: 250, width: null, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}/>
            </CardItem>
            <CardItem style={styles.bottomPanel}>
              <Left>
                <Button transparent>
                  <FontAwesome5 name="heart" size={24} color="#E2DADA" />
                  <Text style={styles.textStyle}>{item.likes}</Text>
                  <FontAwesome5 name="comment" size={24} color="#E2DADA" />
                  <Text style={styles.textStyle}>{item.comments}</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent 
                onPress={()=>navigation.navigate('More')}>
                  <Text style={{color: "#E2DADA"}}>More</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
    </Container>
  );
}

export default function ProfileCard({item, index}) {
  return (
    <Container>
       <NavigationContainer independent={true}>  
          <Stack.Navigator>
              <Stack.Screen 
                name='Add'
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#FDFDFD',
                    height: 1,
                    elevation: 0
                  },
                  headerTintColor: '#FDFDFD',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              >
                {props => <MyCard {...props} extraData={item} />}
              </Stack.Screen>
              <Stack.Screen 
                name='More' 
                options={{
                  title: item.title,
                  headerStyle: {
                    backgroundColor: '#FDFDFD',
                    shadowOpacity: 0,
                    elevation: 0

                  },
                  headerTintColor: 'black',
                  headerTitleStyle: {
                    alignContent: 'center',
                    alignItems: 'center'
                  },
                }}
              >
                {props => <More {...props} extraData={item} />}
              </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        
      </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width: 0,
    height: 0,
    margin: 0
  },
  content: {
    width: '90%',
    margin: 20,
  },
  card: {
    top: 5,
    borderRadius: 30,
    width: 300,
    alignSelf: 'center',
  },
  imagePanel: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  bottomPanel: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 60,
    backgroundColor: "#726969"
  },
  textStyle: {
    color: "#E2DADA"
  }
});