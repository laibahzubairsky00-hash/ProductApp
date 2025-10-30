import ProductCard from "@/src/components/ProductCard";
import { screenHeight, screenWidth } from "@/src/utils/helper";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListHeader from "./components/ProductListHeader";
import SearchBar from "./components/SearchBar";

const ProductList = () => {
  const productData = [
    {
      id: "1",
      productList: "Arm Chair",
      productPrice: "$100",
      image: [
        "https://www.blackmango.com.au/cdn/shop/files/royale-wingback-arm-chair-teal-1025-50-black-mango-4341058177.jpg?v=1752627072",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420198099/XY/KI/SH/50383836/solid-wood-chesterfield-upholstered-arm-chair-wingback-chair-for-living-room-500x500.jpg",
        "https://www.blackmango.com.au/cdn/shop/files/royale-wingback-arm-chair-wolf-grey-1025-40-black-mango-18312309575.jpg?v=1752627075",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "2",
      productList: "Study Table",
      productPrice: "$50",
      image: [
        "https://www.woodensole.com/cdn/shop/files/05_ab853aba-26d5-443e-987f-a7cbfd39847f.jpg?v=1751973700&width=1946",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "3",
      productList: "Easy Bed",
      productPrice: "$700",
      image: [
        "https://m.media-amazon.com/images/I/71Y8fOk5hmL._AC_UF894,1000_QL80_.jpg",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "4",
      productList: "Office Chair",
      productPrice: "$150",
      image: [
        "https://cdn.shopify.com/s/files/1/0044/1208/0217/files/MTRENVIHBSLTAN_900x.jpg?v=1747893311",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "5",
      productList: "Dining Table",
      productPrice: "$250",
      image: [
        "https://www.shutterstock.com/image-photo/cozy-stylish-living-room-round-260nw-2318489457.jpg",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "6",
      productList: "Sofa Set",
      productPrice: "$900",
      image: [
        "https://static.iwmbuzz.com/wp-content/uploads/2022/06/how-to-fit-a-sofa-and-dining-table-in-a-small-living-room.jpeg",
      ],
    },
    {
      id: "7",
      productList: "Bookshelf",
      productPrice: "$120",
      image: ["https://picsum.photos/seed/pic3/400/400"],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "8",
      productList: "Wardrobe",
      productPrice: "$650",
      image: ["https://picsum.photos/seed/pic4/400/400"],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "9",
      productList: "Coffee Table",
      productPrice: "$80",
      image: ["https://picsum.photos/seed/pic1/400/400"],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "10",
      productList: "Nightstand",
      productPrice: "$60",
      image: [
        "https://s3.dutchcrafters.com/product-images/600-600/pid_75911-Amish-Nash-Minimalist-3-Drawer-Nightstand--30.jpg",
        "https://picsum.photos/seed/pic2/400/400",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "11",
      productList: "Recliner",
      productPrice: "$500",
      image: [
        "https://s3.us-east-1.amazonaws.com/com.idmgroup.hcd.media/images/thumb/recliner_387268318_250.jpg",
        "https://picsum.photos/seed/pic3/400/400",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "12",
      productList: "TV Stand",
      productPrice: "$180",
      image: [
        "https://images.woodenstreet.de/image/cache/data/tv-units-mdf/hailey-wall-mounted-tv-unit/exotic/updated+new/updated/upda/new-logo/9-810x702.jpg",
        "https://picsum.photos/seed/pic4/400/400",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
    {
      id: "13",
      productList: "Dressing Table",
      productPrice: "$300",
      image: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ2Ts94NJ4r0Cj59Q92daAq9fAjnJla75bWHElMx5BtjTR7KGRj-p1KbMylHaRn4RoHZDb16-6N7EI_eeDh7vdw_iq4aweLrabSxS0P0ROUv_H4MyxPgdY1nQ",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyRs-JZEFjn5z7cRKk27BesqPjHlgVK4NI7-XTwefxp5i_SrXb9ccdgxEUQ8-pE2ZMaO0wIZYHsOL-WsRxH_nIt1ZgFISVSPUoqvINk8gO8Y_ylBBoLqGvazo",
      ],
      productDescription:
        "Crafted from high-quality materials, this product blends comfort and durability. Its modern design adds a stylish touch to any living space.",
    },
  ];
  const [productState, setproductState] = useState(productData);

  return (
    <SafeAreaView>
      <ProductListHeader />
      <SearchBar
        searchFunction={(text: any) => {
          console.log(text);
          const searchedProduct = productData.filter((item) => {
            return item.productList.toLowerCase().includes(text.toLowerCase());
          });
          setproductState(searchedProduct);
          console.log(searchedProduct);
        }}
      />

      <FlatList
        data={productState}
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
            productImage={item.image}
            productDescription={item.productDescription}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
