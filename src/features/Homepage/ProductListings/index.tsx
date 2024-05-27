import ProductList1 from "@/components/HomepageProductList/ProductList1";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { VStack } from "@chakra-ui/react";
import React from "react";

const getProducts = async () => {
  try {
    const res = await API.Product.getAll({params:{limit:100,page:1}});
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
  
     <ProductList1 products={productList} />
  );
};

export default ProductListings;
