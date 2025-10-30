import React from "react";
import { StyleSheet, View } from "react-native";
import { screenWidth } from "../utils/helper";

const CustomHeader = ({ leftIcon, rightIcon }: any) => {
  return (
    <View style={styles.container}>
      {leftIcon}
      {rightIcon}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    marginVertical: 9,
    marginHorizontal: screenWidth(4),
    alignItems: "center",
  },
});
