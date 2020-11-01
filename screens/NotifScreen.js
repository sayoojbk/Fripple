import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";

function NotifScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.notif1Stack}>
        <View style={styles.notif1}>
          <View style={styles.rect}>
            <Text style={styles.lucyLikedYourPost}>Lucy liked your post</Text>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.rect2}>
            <Text style={styles.notif2text}>
              You received 20 Influencer Karma!
            </Text>
          </View>
        </View>
        <View style={styles.group2}>
          <View style={styles.rect3}>
            <Text style={styles.text3}>Amy started following you!</Text>
          </View>
        </View>
        <View style={styles.group3}>
          <View style={styles.rect4}>
            <Text style={styles.text4}>
              Your weekly post limit is increased to 5
            </Text>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.rect5}>
            <Text style={styles.text5}>H&amp;M posted a new event</Text>
          </View>
        </View>
        <View style={styles.group5}>
          <View style={styles.rect6}>
            <Text style={styles.notifications}>Notifications</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  notif1: {
    top: 59,
    left: 0,
    width: 412,
    height: 61,
    position: "absolute"
  },
  rect: {
    width: 419,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
  lucyLikedYourPost: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 22
  },
  group: {
    top: 119,
    width: 412,
    height: 61,
    position: "absolute",
    left: 0
  },
  rect2: {
    width: 420,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
  notif2text: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 22
  },
  group2: {
    top: 175,
    width: 420,
    height: 61,
    position: "absolute",
    left: 0
  },
  rect3: {
    width: 420,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
  text3: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 22
  },
  group3: {
    top: 234,
    width: 386,
    height: 61,
    position: "absolute",
    left: 0
  },
  rect4: {
    width: 418,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
  text4: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 22
  },
  group4: {
    top: 293,
    width: 413,
    height: 61,
    position: "absolute",
    left: 0
  },
  rect5: {
    width: 423,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderBottomWidth: 1
  },
  text5: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 22
  },
  group5: {
    top: 0,
    width: 412,
    height: 61,
    position: "absolute",
    left: 0
  },
  rect6: {
    width: 412,
    height: 61,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.21,
    shadowRadius: 0
  },
  notifications: {
    fontFamily: "Roboto",
    color: "rgba(94,87,87,1)",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 150
  },
  notif1Stack: {
    width: 420,
    height: 354,
    marginTop: -4,
    marginLeft: -1
  }
});

export default NotifScreen;
