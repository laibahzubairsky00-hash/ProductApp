import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import ProductDetail from "../screens/ProductDetail/ProductDetail";
import ProductList from "../screens/ProductList/ProductList";
import UserProfile from "../screens/UserProfile/UserProfile";

const RootStack = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{
        animation: "slide_from_left",
        headerShown: false,
        headerStyle: { backgroundColor: "red" },
      }}
    >
      <stack.Screen component={ProductList} name="ProductList"></stack.Screen>
      <stack.Screen component={ProductDetail} name="ProductDetail" />
      <stack.Screen
        component={UserProfile}
        name="UserProfile"
        options={{ presentation: "modal" }}
      />
    </stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
