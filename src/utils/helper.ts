import { Dimensions } from "react-native";

export const screenWidth = (percentage = 0) => {
  return (Dimensions.get("screen").width * percentage) / 100;
};

export const screenHeight = (percentage = 0) => {
  return (Dimensions.get("screen").height * percentage) / 100;
};
