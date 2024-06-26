import HomeWrapper from "@/components/HomepageProductList/HomeWrapper";
import { queryKeys } from "@/constants/keys";
import getQueryClient from "@/lib/queryClient";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React from "react";

interface IProps {
  limit?: number;
  page?: number;
  gender?: string;
}
export const getProducts = async ({
  limit = 10,
  page = 1,
  gender = "male",
}: IProps) => {
  try {
    const res = await API.Product.getAll({
      params: { limit: limit, page: page, gender: gender },
    });
    return res;
  } catch (error) {
    logger.log("Error fetching data", error);
  }
};

const ProductListings = async ({ gender }: { gender: string }) => {
  const queryClient = getQueryClient();
  const fetchOptions = {
    limit: 10,
    page: 1,
    gender: gender,
  };

  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKeys.PRODUCT_LISTING],
    queryFn: () => {
      return getProducts(fetchOptions);
    },
    initialPageParam: { limit: 10, page: 1, gender: gender },
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <HomeWrapper gender={gender} />
    </HydrationBoundary>
  );
};

export default ProductListings;
