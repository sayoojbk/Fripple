import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Ionicons } from '@expo/vector-icons';
import ProfileTabs from "../components/profileScreenComponents/ProfileTabs"

function ProfileScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.profileHeader}>
          <View style={styles.followers500Row}>
            <Text style={styles.followers500}>Followers{"\n"}500</Text>
            <Image
                source={require("../assets/images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")}
                resizeMode="contain"
                style={styles.image}
            ></Image>
            <Text style={styles.following500}>Following{"\n"}500</Text>
          </View>
          <Text style={styles.sarahParkar}>Sarah Parkar</Text>
          <Text style={styles.designer}>Designer</Text>
          <View style={styles.rect2}>
            <Ionicons name="md-flower" size={32} color="#5E5757" style={styles.dkIcon} />
            <Text style={styles.dkCount}>340</Text>
            <Ionicons name="md-star" size={32} color="#5E5757" style={styles.ikIcon} />
            <Text style={styles.ikCount}>220</Text>
          </View>
        </View>
        <View style={styles.bottomHalf}>
          <ProfileTabs />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  profileHeader: {
    top: 0,
    left: 0,
    width: '100%',
    height: '36%',
    position: "absolute",
    backgroundColor: "rgba(94,87,87,1)",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginBottom: '10%',
    zIndex: 1000
  },
  followers500: {
    fontFamily: "Roboto",
    color: "rgba(226,218,218,1)",
    textAlign: "center",
    marginTop: '10%'
  },
  ellipse: {
    width: 100,
    height: 100,
    marginLeft: '20%'
  },
  following500: {
    fontFamily: "Roboto",
    color: "rgba(226,218,218,1)",
    textAlign: "center",
    marginLeft: '20%',
    marginTop: '10%'
  },
  followers500Row: {
    height: 82,
    flexDirection: "row",
    marginTop: 71,
    marginLeft: 31,
    marginRight: 35
  },
  sarahParkar: {
    fontFamily: "Roboto",
    color: "rgba(226,218,218,1)",
    fontSize: 25,
    marginTop: '10%',
    marginLeft: '34%'
  },
  designer: {
    fontFamily: "Roboto",
    color: "rgba(179,170,170,1)",
    fontSize: 15,
    marginTop: '1%',
    marginLeft: '44%'
  },
  rect2: {
    top: '92%',
    left: '20%',
    width: 246,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 50,
    zIndex: 1000
  },
  dkIcon: {
    top: '15%',
    left: '8%',
    position: "absolute",
  },
  ikIcon: {
    top: '15%',
    right: '8%',
    position: "absolute",
  },
  dkCount: {
    top: '25%',
    right: '23%',
    fontSize: 18,
    position: "absolute",
    color: "#5E5757"
  },
  ikCount: {
    top: '25%',
    left: '23%',
    fontSize: 18,
    position: "absolute",
    color: "#5E5757"
  },
  bottomHalf: {
    backgroundColor: 'red',
    width: '100%',
    top: '35%',
    height: '65%'
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: '20%',
    borderRadius: 500
  }
});

export default ProfileScreen;
