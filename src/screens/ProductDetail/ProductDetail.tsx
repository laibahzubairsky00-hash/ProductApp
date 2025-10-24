import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListHeader from "../ProductList/components/ProductListHeader";

const ProductDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductListHeader heading="Product Deatil" />
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
