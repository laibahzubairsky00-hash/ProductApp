import { screenHeight, screenWidth } from "@/src/utils/helper";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductListHeader = ({ heading = "Product App" }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Entypo name="shop" size={30} color="black" />
      <View style={styles.rightContainer}>
        <Text style={styles.text}> {heading} </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserProfile");
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductListHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: screenWidth(4),
    gap: screenWidth(2),
    marginVertical: screenHeight(2),

    alignSelf: "flex-start",
  },
  rightContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
    height: 30,
    width: 30,
  },
  text: {
    color: "purple",
    fontWeight: "800",
    flex: 1,
    fontSize: 20,
  },
});
