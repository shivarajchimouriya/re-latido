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
  
      <HomepageProductLists products={productList} viewType={1} />
  );
};

export default ProductListings;
