import ProductCard from "@/components/Cards/ProductCard";
import HomepageProductLists from "@/components/HomepageProductList";
import { mockProducts } from "@/data/mock/products";
import { VStack } from "@chakra-ui/react";
import React from "react";

const ProductListings = () => {
  return (
    <VStack w="100%" h="fit-content" maxW="50rem" p="2rem">
      <HomepageProductLists products={mockProducts} viewType={1} />
    </VStack>
  );
};

export default ProductListings;
