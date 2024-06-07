import HomepageProductLists from "@/components/HomepageProductList";
import { API } from "@/resources";
import { IProductFilterReq } from "@/resources/Product/interface";
import { logger } from "@/utils/logger";
import { VStack } from "@chakra-ui/react";
import React from "react";
import AppliedFilters from "./features/AppliedFilters";
import useHandleErrorToast from "@/hooks/client/useAppToast";

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
  const products = filteredProducts?.data.product.data;

  if (!products) return null;

  return (
    <VStack w="100%">
      <AppliedFilters filter={filter} />
      <HomepageProductLists products={products} viewType={1} />
    </VStack>
  );
};

export default FilterResults;
