import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { verticalScale } from "react-native-size-matters";

const ProductCard = ({
  productTitle = "default",
  productPrice = "null",
  productImage = ["https://m.media-amazon.com/images/I/81a-oJGw2-L.jpg"],
  productDescription = "nth",
}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          productTitle,
          productPrice,
          productImage,
          productDescription,
        })
      }
    >
      <View>
        <Image style={styles.Image} source={{ uri: productImage[0] }} />
        <View style={styles.favouriteStyle}>
          <Entypo name="heart-outlined" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.titleText}> {productTitle} </Text>
        </View>
        <View>
          <Text style={styles.subText}>Price : {productPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.45,
  },
  Image: {
    width: "100%",
    height: verticalScale(150),
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "red",
  },
  favouriteStyle: {
    backgroundColor: "rgba(255,255,0,0.4)",
    padding: 5,
    borderRadius: 100,
    position: "absolute",
    right: 10,
    top: 10,
  },
  titleText: {
    flexDirection: "row",
    fontStyle: "italic",
    fontWeight: 900,
    color: "purple",
    fontSize: 25,
    marginBlockStart: 5,
    marginInlineStart: 20,
  },
  subText: {
    fontSize: 15,
    fontStyle: "normal",
    color: "purple",
    marginInlineStart: 20,
  },
});
