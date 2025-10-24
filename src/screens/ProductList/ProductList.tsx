import ProductCard from "@/src/components/ProductCard";
import { screenHeight, screenWidth } from "@/src/utils/helper";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListHeader from "./components/ProductListHeader";
import SearchBar from "./components/SearchBar";

const ProductList = () => {
  const productData = [
    {
      productList: "Arm Chair",
      productPrice: "$100",
      id: "1",
    },
    {
      productList: "Study table",
      productPrice: "$50",
      id: "2",
    },
    {
      productList: "Easy bed",
      productPrice: "$700",
      id: "3",
    },
  ];
  return (
    <SafeAreaView>
      <ProductListHeader />
      <SearchBar />
      <FlatList
        data={productData}
        numColumns={2}
        columnWrapperStyle={{ gap: screenWidth(2) }}
        style={{ alignSelf: "center" }}
        contentContainerStyle={{
          gap: screenHeight(2),
        }}
        renderItem={({ item }) => (
          <ProductCard
            productTitle={item.productList}
            productPrice={item.productPrice}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
