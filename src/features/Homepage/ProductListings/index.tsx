import ProductCard from "@/components/Cards/ProductCard";
import { mockProducts } from "@/data/mock/products";
import { VStack } from "@chakra-ui/react";
import React from "react";

const ProductListings = () => {
  return (
    <VStack w="100%" p="2rem">
      {mockProducts.map(el => {
        return <ProductCard product={el} key={el.name} />;
      })}
    </VStack>
  );
};

export default ProductListings;
