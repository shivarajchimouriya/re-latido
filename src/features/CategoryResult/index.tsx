import DataNotFound from "@/components/DataNotFound";
import HomepageProductLists from "@/components/HomepageProductList";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { notFound } from "next/navigation";
import React from "react";

const getProductsByCategory = async (id: string, gender: string) => {
  try {
    const res = await API.Product.byCategory(id, {
      params: { limit: 100, gender: gender },
    });
    return res;
  } catch (err) {
    logger.log("error fetching products by category", err);
  }
};

interface IProps {
  id: string;
  gender: string;
}

const CategoryResult = async ({ id, gender }: IProps) => {
  const productsByCategory = await getProductsByCategory(id, gender);
  const products = productsByCategory?.data.data;
  if (!products || products.length === 0) {
    return <DataNotFound />;
  }
  return <HomepageProductLists products={products} viewType={1} />;
};

export default CategoryResult;
