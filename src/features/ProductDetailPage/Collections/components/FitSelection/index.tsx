import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import data from "@/data/mock/fitting";
import FittingSwiper from "../FittingSwiper";
import { appColor } from "@/theme/foundations/colors";
import { useParams } from "next/navigation";
import { getClient } from "@/lib/apolloClient";
import { getNode } from "@/GraphQl/Queries/getNode";
import { logger } from "@/utils/logger";
import {
  ProductListDocument,
  useProductListQuery,
} from "@/GraphQl/Generated/graphql";

export interface FitOptionsProps {
  label?: any;
  back?: any;
  front?: any;
}

export default function FitSelection({ productId }: { productId: string }) {
  const { data: filteredProductsData, loading: filteredProductsLoading } =
    useProductListQuery({
      variables: { filters: { productId: { eq: productId } } },
    });

  const options: FitOptionsProps[] =
    filteredProductsData?.productLists?.data?.map((fit: any) => {
      return {
        label: fit?.attributes?.Fit,
        front: fit?.attributes?.FrontImage,
        back: fit?.attributes?.BackImage,
      };
    }) || [];

  return (
    <Box width="100%">
      <Text
        textTransform="uppercase"
        fontWeight="medium"
        fontSize={"1.4rem"}
        color={appColor.base}
      >
        Fit Selection
      </Text>
      <FittingSwiper options={options} />
    </Box>
  );
}
