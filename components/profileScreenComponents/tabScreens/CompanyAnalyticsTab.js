import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <Text style={styles.attributes}>Attributes:</Text>
        <TextInput
          placeholder="Input attributes like colour, class, gender, etc."
          style={styles.textInput}
        ></TextInput>
        <View style={styles.rect4Row}>
          <TouchableOpacity style={styles.rect4}>
            <Text style={styles.startDate}>Start Date</Text>
          </TouchableOpacity>
          <Text style={styles.to}>to</Text>
          <TouchableOpacity style={styles.rect5}>
            <Text style={styles.endDate}>End Date</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group}>
          <EntypoIcon
            name="chevron-small-down"
            style={styles.icon}
          ></EntypoIcon>
          <View style={styles.rect6}>
            <Text style={styles.popularityOverTime}>Popularity Over Time</Text>
          </View>
        </View>
        <View style={styles.group2}>
          <EntypoIcon
            name="chevron-small-down"
            style={styles.icon2}
          ></EntypoIcon>
          <View style={styles.rect7}>
            <Text style={styles.reg}>Regional Popularity</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.rect8}>
          <Text style={styles.emailReport}>Email Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  rect3: {
    width: '100%',
    height: '100%',
    backgroundColor: "#E6E6E6"
  },
  attributes: {
    fontFamily: "Roboto",
    color: "rgba(94,87,87,1)",
    fontSize: 18,
    marginTop: 26,
    marginLeft: 24
  },
  textInput: {
    fontFamily: "Roboto",
    color: "#121212",
    height: 62,
    width: 340,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    marginTop: 25,
    marginLeft: 35,
    textAlign: 'center'
  },
  rect4: {
    width: 98,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    marginTop: -1
  },
  startDate: {
    fontFamily: "Roboto",
    color: "#121212",
    marginTop: 10,
    marginLeft: 18
  },
  to: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 15,
    marginLeft: 38,
    marginTop: 10
  },
  rect5: {
    width: 98,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    marginLeft: 41,
    marginTop: -1
  },
  endDate: {
    fontFamily: "Roboto",
    color: "#121212",
    marginTop: 10,
    marginLeft: 18
  },
  rect4Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 44,
    marginRight: 67
  },
  group: {
    width: 317,
    height: 36,
    marginTop: 37,
    marginLeft: 27
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -4,
    marginLeft: 285
  },
  rect6: {
    width: 340,
    height: 36,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: -40,
    zIndex: -5
  },
  popularityOverTime: {
    fontFamily: "Roboto",
    color: "#121212",
    marginTop: 9,
    marginLeft: 17
  },
  group2: {
    width: 317,
    height: 36,
    marginTop: 12,
    marginLeft: 27
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: -4,
    marginLeft: 285
  },
  rect7: {
    width: 340,
    height: 36,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: -40,
    zIndex: -5,
    alignSelf: "center",
    left: 11
  },
  reg: {
    fontFamily: "Roboto",
    color: "#121212",
    marginTop: 9,
    marginLeft: 17
  },
  rect8: {
    width: 123,
    height: 31,
    backgroundColor: "rgba(94,87,87,1)",
    borderRadius: 25,
    marginTop: 21,
    marginLeft: 150
  },
  emailReport: {
    fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    marginTop: 7,
    marginLeft: 20
  }
});

export default Index;
