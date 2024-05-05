import HomepageProductLists from "@/components/HomepageProductList";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import React from "react";

const getProductsByCategory = async (id: string) => {
  try {
    const res = await API.Product.byCategory(id);
    return res;
  } catch (err) {
    logger.log("error fetching products by category");
  }
};

interface IProps {
  id: string;
}
 
const CategoryResult = async ({ id }: IProps) => {

  const productsByCategory = await getProductsByCategory(id);
  const products=productsByCategory?.data.data;
  logger.log("pr")
if(!products) return null;
  return    <HomepageProductLists products={products} viewType={1} />
};

export default CategoryResult;
