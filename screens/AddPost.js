import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function AddPost(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <View style={styles.rect2}>
          <TextInput
            placeholder="Pour out your creativity here..."
            style={styles.textInput}
          ></TextInput>
          <View style={styles.group7}>
            <View style={styles.group2Row}>
              <View style={styles.group2}>
                <View style={styles.ellipse3Stack}>
                  <Svg viewBox="0 0 45.51 45.51" style={styles.ellipse3}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(114,105,105,1)"
                      cx={23}
                      cy={23}
                      rx={23}
                      ry={23}
                    ></Ellipse>
                  </Svg>
                  <EntypoIcon name="camera" style={styles.icon3}></EntypoIcon>
                </View>
              </View>
              <View style={styles.group3}>
                <View style={styles.ellipse4Stack}>
                  <Svg viewBox="0 0 45.51 45.51" style={styles.ellipse4}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(114,105,105,1)"
                      cx={23}
                      cy={23}
                      rx={23}
                      ry={23}
                    ></Ellipse>
                  </Svg>
                  <EntypoIcon
                    name="attachment"
                    style={styles.icon4}
                  ></EntypoIcon>
                </View>
              </View>
              <View style={styles.group4}>
                <View style={styles.ellipse5Stack}>
                  <Svg viewBox="0 0 45.51 45.51" style={styles.ellipse5}>
                    <Ellipse
                      strokeWidth={0}
                      fill="rgba(114,105,105,1)"
                      cx={23}
                      cy={23}
                      rx={23}
                      ry={23}
                    ></Ellipse>
                  </Svg>
                  <EntypoIcon
                    name="location-pin"
                    style={styles.icon5}
                  ></EntypoIcon>
                </View>
              </View>
              <View style={styles.group5}>
                <View style={styles.rect3}>
                  <View style={styles.icon6Row}>
                    <FontAwesomeIcon
                      name="tag"
                      style={styles.icon6}
                    ></FontAwesomeIcon>
                    <Text style={styles.tags}>Tags</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.group6}>
            <View style={styles.rect4}>
              <View style={styles.icon7Row}>
                <MaterialCommunityIconsIcon
                  name="circle-edit-outline"
                  style={styles.icon7}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.post}>Post!</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 94.62 94.62" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(255,255,255,1)"
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                cx={47}
                cy={47}
                rx={47}
                ry={47}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 75.46 75.46" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(226,218,218,1)"
                strokeWidth={0}
                fill="rgba(226,218,218,1)"
                cx={38}
                cy={38}
                rx={38}
                ry={38}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="lightbulb-on-outline"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
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
  rect: {
    top: 0,
    left: 0,
    width: 414,
    height: 146,
    position: "absolute",
    backgroundColor: "rgba(114,105,105,1)"
  },
  rect2: {
    top: 90,
    left: 0,
    width: 412,
    height: 802,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  textInput: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 372,
    width: 365,
    textAlign: "center",
    backgroundColor: "rgba(245,241,241,1)",
    borderRadius: 25,
    marginTop: 89,
    marginLeft: 24
  },
  group7: {
    width: 46,
    height: 46,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 24
  },
  group2: {
    width: 46,
    height: 46
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 46,
    height: 46,
    position: "absolute"
  },
  icon3: {
    top: 11,
    left: 12,
    position: "absolute",
    color: "rgba(226,218,218,1)",
    fontSize: 21
  },
  ellipse3Stack: {
    width: 46,
    height: 46
  },
  group3: {
    width: 46,
    height: 46,
    marginLeft: 8
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 46,
    height: 46,
    position: "absolute"
  },
  icon4: {
    top: 11,
    left: 13,
    position: "absolute",
    color: "rgba(226,218,218,1)",
    fontSize: 21
  },
  ellipse4Stack: {
    width: 46,
    height: 46
  },
  group4: {
    width: 46,
    height: 46,
    marginLeft: 10
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 46,
    height: 46,
    position: "absolute"
  },
  icon5: {
    top: 9,
    left: 11,
    position: "absolute",
    color: "rgba(226,218,218,1)",
    fontSize: 25
  },
  ellipse5Stack: {
    width: 46,
    height: 46
  },
  group5: {
    width: 110,
    height: 46,
    marginLeft: 97
  },
  rect3: {
    width: 110,
    height: 46,
    backgroundColor: "rgba(114,105,105,1)",
    borderRadius: 30,
    flexDirection: "row"
  },
  icon6: {
    color: "rgba(226,218,218,1)",
    fontSize: 25,
    height: 25,
    width: 21
  },
  tags: {
    fontFamily: "Roboto",
    color: "rgba(226,218,218,1)",
    fontSize: 16,
    marginLeft: 14,
    marginTop: 2
  },
  icon6Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 14,
    marginTop: 11
  },
  group2Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: -317
  },
  group6: {
    width: 140,
    height: 60,
    marginTop: 45,
    marginLeft: 136
  },
  rect4: {
    width: 140,
    height: 60,
    backgroundColor: "rgba(114,105,105,1)",
    borderRadius: 30,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(226,218,218,1)",
    fontSize: 30,
    height: 33,
    width: 31
  },
  post: {
    fontFamily: "Roboto",
    color: "rgba(226,218,218,1)",
    fontSize: 20,
    marginLeft: 14,
    marginTop: 3
  },
  icon7Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 33,
    marginLeft: 17,
    marginTop: 14
  },
  group: {
    top: 65,
    left: 160,
    width: 95,
    height: 95,
    position: "absolute"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 95,
    height: 95,
    position: "absolute"
  },
  ellipse2: {
    top: 10,
    left: 10,
    width: 75,
    height: 75,
    position: "absolute"
  },
  icon2: {
    top: 25,
    left: 27,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  ellipseStack: {
    width: 95,
    height: 95
  },
  rectStack: {
    width: 414,
    height: 892
  }
});

export default AddPost;
