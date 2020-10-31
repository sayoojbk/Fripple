import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView,ImageBackground} from 'react-native';

export default class LoginScreen extends React.Component {
  state={
    email:"",
    password:""
  }
  // AppNavigator = StackNavigator({
  //   Cluster1: { screen: Cluster1},
  //    Play: { screen: Play},
  //  });
//   <ImageBackground  source={{uri: 'http://i.imgur.com/IGlBYaC.jpg'}} style={s.backgroundImage}>
//         <View style={s.overlay}>
//           <Text style={s.logo}>MAFDFDFLDSFKLSDKFSDFDSF</Text>
//         </View>
//       </ImageBackground >
   
  handleOnPress = () => {
    console.log('user login pressed')
  }
  render(){
    return (      
    <ImageBackground source={require('../../assets/images/overlay.jpg')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
        <Text style={styles.logo}></Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleOnPress} style={styles.loginBtn}>
          <Text style={styles.loginText}>User Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn2}>
          <Text style={styles.loginText}>Company Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </SafeAreaView>
    </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // backgroundColor: 'red',
    opacity: 0.8
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    // backgroundColor:"#465881",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:20
  },
  loginBtn2:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    // marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
   },
   overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3
    },
});