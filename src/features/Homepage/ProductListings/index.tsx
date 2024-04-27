import ProductCard from "@/components/Cards/ProductCard";
import HomepageProductLists from "@/components/HomepageProductList";
import { mockProducts } from "@/data/mock/products";
import { VStack } from "@chakra-ui/react";
import React from "react";

const ProductListings = () => {
  return (
    <VStack
      w="100%"
      maxW="50rem"
      overflow="auto"
      rounded="1rem"
      p="2rem"
      style={{
        scrollSnapType: "y mandatory",
        scrollSnapStop: "always",
        scrollBehavior: "smooth",
        height: "calc(-230px + 100dvh)"
      }}
    >
      <HomepageProductLists products={mockProducts} viewType={1} />
    </VStack>
  );
};

export default ProductListings;
