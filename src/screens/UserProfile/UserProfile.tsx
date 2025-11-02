import CustomButton from "@/src/components/CustomButton";
import CustomHeader from "@/src/components/CustomHeader";
import { screenHeight, screenWidth } from "@/src/utils/helper";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const UserProfile = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <CustomHeader
        rightIcon={
          <Entypo name="dots-three-vertical" size={22} color="black" />
        }
        leftIcon={
          <Entypo
            name="cross"
            size={30}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: 700 }}>laiba zubair</Text>
        <Text>laibaubair@outlook.com</Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          margin: 5,
          gap: screenHeight(2),
        }}
      >
        <View style={styles.rowContainer}>
          <Entypo
            style={styles.iconStyle}
            name="heart-outlined"
            size={24}
            color="black"
          />
          <Text style={{ flex: 1 }} children="Favourites" />
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style={styles.rowContainer}>
          <Feather
            style={styles.iconStyle}
            name="shopping-bag"
            size={24}
            color="black"
          />
          <Text style={{ flex: 1 }} children="shop list" />
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View style={styles.rowContainer}>
          <AntDesign
            style={styles.iconStyle}
            name="setting"
            size={24}
            color="black"
          />
          <Text style={{ flex: 1 }} children="settings" />
          <AntDesign name="right" size={24} color="black" />
        </View>
      </View>
      <CustomButton onPressButton ={()=> }
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  image: {
    borderRadius: 100,

    height: 130,
    width: 130,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: screenWidth(3),
    margin: 5,
    alignItems: "center",
  },
  iconStyle: {
    backgroundColor: "lightgrey",
    borderRadius: 100,
    padding: 6,
  },
});
