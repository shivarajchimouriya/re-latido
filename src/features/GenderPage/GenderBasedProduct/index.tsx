import HomepageProductLists from "@/components/HomepageProductList";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import React from "react";

type genderTypes = "male" | "female";

interface IProps {
  gender: genderTypes;
}

const fetchProductByGender = async (gender: genderTypes) => {
  try {
    const res = await API.Product.getAll({ params: { gender, limit: 1000 } });
    return res;
  } catch (error) {
    logger.log("Error fetch prodcut", error);
  }
};

const GenderBasedProducts = async ({ gender }: IProps) => {
  const res = await fetchProductByGender(gender);
  if (!res) return null;
  const productList = res.data.data;
  return <HomepageProductLists products={productList} viewType={1} />;
};

export default GenderBasedProducts;
