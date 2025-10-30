import CustomButton from "@/src/components/CustomButton";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserProfile = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>UserProfile</Text>
      <CustomButton
        buttonTitle={"PRODUCT LIST"}
        containerStyle={{ backgroundColor: "#CDBBB4" }}
        onPressButton={() => {
          navigation.navigate("ProductList");
        }}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
