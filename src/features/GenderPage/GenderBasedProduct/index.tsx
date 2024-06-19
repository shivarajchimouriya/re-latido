import { queryKeys } from "@/constants/keys";
import getQueryClient from "@/lib/queryClient";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React from "react";
import GenderProductWrapper from "../GenderProductWrapper";

export type genderTypes = "male" | "female";

interface IProps {
  gender: genderTypes;
}
interface IFetchProps {
  gender: genderTypes;
  limit: number;
  page: number;
}

export const fetchProductByGender = async (params: IFetchProps) => {
  try {
    const res = await API.Product.getAll({
      params: { gender: params.gender, limit: params.limit, page: params.page },
    });
    return res;
  } catch (error) {
    logger.log("Error fetch product", error);
  }
};

const GenderBasedProducts = async ({ gender }: IProps) => {
  const queryClient = getQueryClient();
  const fetchOptions = {
    limit: 10,
    gender: gender,
    page: 1,
  };
  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKeys.GENDER_PRODUCT_LISTING, gender],
    queryFn: () => {
      return fetchProductByGender(fetchOptions);
    },
    initialPageParam: { limit: 10, page: 1, gender: gender },
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GenderProductWrapper gender={gender} />
    </HydrationBoundary>
  );
};

export default GenderBasedProducts;
