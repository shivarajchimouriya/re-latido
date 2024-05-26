import { queryKeys } from "@/constants/keys";
import getQueryClient from "@/lib/queryClient";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React from "react";
import TopRatedProductClient from "../TopRatedProduct.client";

interface IReq {
  keyword: string;
  gender: string;
}

const getTopRatedProduct = async ({ keyword, gender }: IReq) => {
  try {
    const res = await API.Product.getTopRated({
      params: { search: keyword, gender: "", limit: 10, page: 1 }
    });
    logger.log("res", res);

    return res;
  } catch (error) {
    logger.log("Error ", error);
  }
};

interface IProps {
  keyword: string;
  gender: string;
}

const TopRatedProduct = async ({ gender, keyword }: IProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.TOP_RATED, keyword],
    queryFn: () => getTopRatedProduct({ gender, keyword })
  });
  const dehydrated = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydrated}>
      <TopRatedProductClient />
    </HydrationBoundary>
  );
};

export default TopRatedProduct;
