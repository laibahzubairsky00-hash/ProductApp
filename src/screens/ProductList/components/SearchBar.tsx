import { screenHeight, screenWidth } from "@/src/utils/helper";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({ searchFunction }: any) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        onChangeText={(textone) => {
          // console.log(searchFunction);
          searchFunction(textone);
        }}
        placeholder="search here"
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: screenWidth(4),
    paddingVertical: screenHeight(1),
    paddingHorizontal: screenWidth(3),
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: screenHeight(1),
  },
  textInput: { paddingVertical: 0, color: "blue", flex: 1 },
});
