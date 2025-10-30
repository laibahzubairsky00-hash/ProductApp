import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { screenWidth } from "../utils/helper";

const CustomButton = ({
  onPressButton,
  buttonTitle = "N/A",
  containerStyle,
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => {
        onPressButton && onPressButton();
      }}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}> {buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: screenWidth(89),
    alignSelf: "center",
    backgroundColor: "pink",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {},
});
