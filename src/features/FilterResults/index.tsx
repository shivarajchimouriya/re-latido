import HomepageProductLists from "@/components/HomepageProductList";
import { API } from "@/resources";
import { IProductFilterReq } from "@/resources/Product/interface";
import { logger } from "@/utils/logger";
import React from "react";

interface IProps {
  filter: IProductFilterReq;
}

const getResultFilter = async (filter: IProductFilterReq) => {
  try {
    const res = await API.Product.filter({ ...filter });
    return res;
  } catch (error) {
    logger.log("Error fetching filtered produts");
  }
};

const FilterResults = async ({ filter }: IProps) => {
  const filteredProducts = await getResultFilter(filter);
  const products=filteredProducts?.data.data;
  if(!products) return null;

  return <HomepageProductLists products={products} viewType={1} />
};

export default FilterResults;
