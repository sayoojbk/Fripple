/* eslint react/prop-types : off */
/* eslint no-unused-vars : off */
import React from "react";

import { Dimensions } from "react-native";

import CreativeCard from "./components/CreativeCard";


import CreativeImage from "./assets/creative";

const { height } = Dimensions.get("window");

export default [
  {
    image: {
      uri: CreativeImage
    },
    height: height * 0.7,
    renderItem: ({ item }) => <CreativeCard />
  }
];
