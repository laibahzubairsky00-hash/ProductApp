import CustomButton from "@/src/components/CustomButton";
import CustomHeader from "@/src/components/CustomHeader";
import { screenHeight, screenWidth } from "@/src/utils/helper";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import React from "react";
import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation<any>();
  console.log(route.params.productImage);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        rightIcon={
          <Fontisto
            name="share"
            size={23}
            color="purple"
            onPress={() => Alert.alert("feature unavailable")}
          />
        }
        leftIcon={
          <Ionicons
            name="arrow-back-circle-sharp"
            size={30}
            color="purple"
            onPress={() => navigation.goBack()}
          />
        }
      />
      <FlatList
        style={{
          marginHorizontal: screenWidth(6),
          flexGrow: 0,
          borderRadius: 40,
        }}
        horizontal
        data={route.params.productImage}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: screenWidth(95), height: screenHeight(40) }}
          />
        )}
      />
      <View style={{ flex: 1, gap: 5, margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 28, color: "purple" }}>
            {route.params.productTitle}
          </Text>
          <Entypo
            name="heart-outlined"
            size={30}
            color="white"
            style={{
              backgroundColor: "#AE8CB1",
              borderRadius: 100,
              padding: 5,
            }}
          />
        </View>
        <Text style={{ fontWeight: 300, fontSize: 16, color: "black" }}>
          {route.params.productDescription}{" "}
        </Text>
        <Text>
          {" "}
          {route.params.productPrice}{" "}
          <Text
            style={{
              textDecorationLine: "line-through",
              color: "gray",
              marginLeft: 20,
            }}
          >
            $750
          </Text>
        </Text>
      </View>
      <CustomButton
        containerStyle={{ backgroundColor: "#AE8CB1" }}
        onPressButton={() => navigation.navigate("ProductList")}
        buttonTitle={"Add to Cart"}
      />
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
