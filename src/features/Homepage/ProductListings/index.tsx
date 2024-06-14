import HomeWrapper from "@/components/HomepageProductList/HomeWrapper";
import ProductList1 from "@/components/HomepageProductList/ProductList1";
import { queryKeys } from "@/constants/keys";
import getQueryClient from "@/lib/queryClient";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { VStack } from "@chakra-ui/react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";

interface IProps {
  limit?: number;
  page?: number;
}
export const getProducts = async ({ limit = 10, page = 1 }: IProps) => {
  try {
    const res = await API.Product.getAll({
      params: { limit: limit, page: page },
    });
    return res;
  } catch (error) {
    logger.log("Error fetching data", error);
  }
};

const ProductListings = async () => {
  const queryClient = getQueryClient();
  const fetchOptions = {
    limit: 10,
    page: 1,
  };

  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKeys.PRODUCT_LISTING],
    queryFn: () => {
      return getProducts(fetchOptions);
    },
    initialPageParam: { limit: 5, page: 1 },
  });
  const dehydratedState = dehydrate(queryClient);

  // const products = await getProducts();
  // const productList = products?.data.data;
  // if (!productList) return null;
  return (
    <HydrationBoundary state={dehydratedState}>
      <HomeWrapper />
    </HydrationBoundary>
  );
};

export default ProductListings;
