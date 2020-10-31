import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function FeaturedExplore(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image7Row}>
        <Image
          source={require("../../assets/images/model2.jpeg")}
          resizeMode="contain"
          style={styles.image7}
        ></Image>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <View style={styles.rect4Row}>
              <View style={styles.rect4}>
                <Icon name="plus" style={styles.icon}></Icon>
              </View>
              <Image
                source={require("../../assets/images/photo-1438761681033-6461ffad8d80_(1)1.jpeg")}
                resizeMode="cover"
                style={styles.image4}
              ></Image>
              <Image
                source={require("../../assets/images/model3.png")}
                resizeMode="cover"
                style={styles.image9}
              ></Image>
              <Image
                source={require("../../assets/images/hm.png")}
                resizeMode="cover"
                style={styles.image10}
              ></Image>
            </View>
            <View style={styles.youRow}>
              <Text style={styles.you}>You</Text>
              <Text style={styles.elixir}>Elixir</Text>
              <Text style={styles.sarah}>Sarah</Text>
              <Text style={styles.hM}>H&amp;M</Text>
            </View>
          </View>
          <View style={styles.rect}>
            <View style={styles.recommendedForYouRow}>
              <Text style={styles.recommendedForYou}>Recommended for you</Text>
              <Text style={styles.viewAll}>View All</Text>
            </View>
            <View style={styles.rect5Row}>
              <View style={styles.rect5}>
                <Image
                  source={require("../../assets/images/sabyasachi.png")}
                  resizeMode="cover"
                  style={styles.image11}
                ></Image>
                <Text style={styles.sabyasachi}>Sabyasachi</Text>
                <Text style={styles.follow}>+ Follow</Text>
              </View>
              <View style={styles.rect6}>
                <Image
                  source={require("../../assets/images/nike.png")}
                  resizeMode="cover"
                  style={styles.image12}
                ></Image>
                <Text style={styles.nikeFootwear}>Nike Footwear</Text>
                <Text style={styles.follow1}>+ Follow</Text>
              </View>
              <View style={styles.rect7}>
                <Image
                  source={require("../../assets/images/vogue.png")}
                  resizeMode="cover"
                  style={styles.image13}
                ></Image>
                <Text style={styles.vogue}>Vogue</Text>
                <Text style={styles.follow2}>+ Follow</Text>
              </View>
            </View>
            <View style={styles.featuredExploreRow}>
              <Text style={styles.featuredExplore}>Featured Explore</Text>
              <TextInput placeholder="All" style={styles.textInput}></TextInput>
              <TextInput
                placeholder="Women"
                style={styles.textInput2}
              ></TextInput>
              <TextInput
                placeholder="Men"
                style={styles.textInput3}
              ></TextInput>
            </View>
            <View style={styles.image14ColumnRow}>
              <View style={styles.image14Column}>
                <Image
                  source={require("../../assets/images/data6.png")}
                  resizeMode="cover"
                  style={styles.image14}
                ></Image>
                <Image
                  source={require("../../assets/images/data5.png")}
                  resizeMode="cover"
                  style={styles.image17}
                ></Image>
              </View>
              <View style={styles.image15Column}>
                <Image
                  source={require("../../assets/images/data2.png")}
                  resizeMode="cover"
                  style={styles.image15}
                ></Image>
                <Image
                  source={require("../../assets/images/data3.png")}
                  resizeMode="cover"
                  style={styles.image16}
                ></Image>
              </View>
            </View>
          </View>
          <Image
            source={require("../../assets/images/data4.png")}
            resizeMode="cover"
            style={styles.image18}
          ></Image>
          <Image
            source={require("../../assets/images/model21.png")}
            resizeMode="cover"
            style={styles.image19}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  image7: {
    width: 200,
    height: 200,
    marginTop: 171
  },
  rect2: {
    top: 0,
    left: 0,
    width: 420,
    height: 176,
    position: "absolute",
    backgroundColor: "rgba(114,105,105,1)"
  },
  rect4: {
    width: 80,
    height: 60,
    backgroundColor: "#E6E6E6",
    borderRadius: 20
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 10,
    marginLeft: 20
  },
  image4: {
    width: 80,
    height: 60,
    borderRadius: 20,
    marginLeft: 22
  },
  image9: {
    width: 80,
    height: 60,
    borderRadius: 20,
    marginLeft: 18
  },
  image10: {
    width: 80,
    height: 60,
    borderRadius: 20,
    marginLeft: 16
  },
  rect4Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 24,
    marginRight: 20
  },
  you: {
    fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  elixir: {
    fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 74
  },
  sarah: {
    fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 60
  },
  hM: {
    fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 60
  },
  youRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 51,
    marginRight: 39
  },
  rect: {
    top: 145,
    left: 0,
    width: 412,
    height: 747,
    position: "absolute",
    backgroundColor: "rgba(230,230,230,1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  recommendedForYou: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212"
  },
  viewAll: {
    fontFamily: "Roboto",
    color: "#121212",
    marginLeft: 161
  },
  recommendedForYouRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 27,
    marginRight: 31
  },
  rect5: {
    width: 112,
    height: 142,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(114,105,105,1)"
  },
  image11: {
    width: 80,
    height: 90,
    marginTop: 11,
    marginLeft: 15
  },
  sabyasachi: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 23
  },
  follow: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "rgba(114,105,105,1)",
    marginLeft: 27
  },
  rect6: {
    width: 112,
    height: 142,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(114,105,105,1)",
    marginLeft: 12
  },
  image12: {
    width: 80,
    height: 90,
    marginTop: 11,
    marginLeft: 18
  },
  nikeFootwear: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 20
  },
  follow1: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "rgba(114,105,105,1)",
    marginLeft: 28
  },
  rect7: {
    width: 112,
    height: 142,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(114,105,105,1)",
    marginLeft: 12
  },
  image13: {
    width: 80,
    height: 90,
    marginTop: 11,
    marginLeft: 17
  },
  vogue: {
    fontFamily: "Roboto",
    color: "#121212",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 40
  },
  follow2: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "rgba(114,105,105,1)",
    marginLeft: 30
  },
  rect5Row: {
    height: 142,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 28,
    marginRight: 24
  },
  featuredExplore: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212"
  },
  textInput: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212",
    width: 42,
    height: 18,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 39
  },
  textInput2: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212",
    width: 60,
    height: 17,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    marginLeft: 10
  },
  textInput3: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#121212",
    width: 35,
    height: 17,
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    marginLeft: 13
  },
  featuredExploreRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 27,
    marginRight: 80
  },
  image14: {
    width: 143,
    height: 200,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  image17: {
    width: 143,
    height: 200,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 12,
    marginLeft: 1
  },
  image14Column: {
    width: 144
  },
  image15: {
    width: 200,
    height: 143,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  image16: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    marginTop: 8
  },
  image15Column: {
    width: 200,
    marginLeft: 19,
    marginBottom: 61
  },
  image14ColumnRow: {
    height: 412,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 26,
    marginRight: 23
  },
  image18: {
    top: 792,
    left: 189,
    width: 200,
    height: 200,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  image19: {
    top: 850,
    left: 26,
    width: 143,
    height: 200,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)"
  },
  rect2Stack: {
    width: 420,
    height: 1050,
    marginLeft: 74
  },
  image7Row: {
    height: 1050,
    flexDirection: "row",
    flex: 1,
    marginRight: -8,
    marginLeft: -274
  }
});

export default FeaturedExplore;
