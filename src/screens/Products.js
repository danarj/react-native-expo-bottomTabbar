import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../../assets/home.svg")}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
