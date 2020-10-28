import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';
import AddForm from '../../../screens/AddForm'
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

function More(props) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FDFDFD',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>More content, Update from props</Text>
    </View>
  );
}

function MyCard( props ) {
  console.log(props);
  const item = props.extraData;
  const navigation = props.navigation;
  // const item = props.item;
  // console.log
  // console.log(navigation)
  // console.log(other)
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
                  <AntDesign name="smileo" size={24} color="#E2DADA" />
                  <Text style={styles.textStyle}>12 Smileys</Text>
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
        {/* <MyCard item={item} index={index}/> */}
        
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
    borderRadius: 30,
  },
  imagePanel: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  bottomPanel: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#726969"
  },
  textStyle: {
    color: "#E2DADA"
  }
});