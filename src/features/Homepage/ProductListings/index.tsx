import ProductCard from "@/components/Cards/ProductCard";
import HomepageProductLists from "@/components/HomepageProductList";
import { mockProducts } from "@/data/mock/products";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { VStack } from "@chakra-ui/react";
import React from "react";

const getProducts = async () => {
  try {
    const res = await API.Product.getAll();
    return res;
  } catch (error) {
    logger.log("Error fetching data", error);
  }
};

const ProductListings = async () => {
  const products = await getProducts();
const productList=products?.data.data;
if(!productList) return null;
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
      <HomepageProductLists products={productList} viewType={1} />
    </VStack>
  );
};

export default ProductListings;
