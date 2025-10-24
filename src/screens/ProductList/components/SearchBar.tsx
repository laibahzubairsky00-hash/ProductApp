import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="black" />
      <TextInput>SearchBar</TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
});
