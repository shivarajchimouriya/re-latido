import { Box, Text } from "@chakra-ui/react";
import React from "react";
import FittingSwiper from "../FittingSwiper";
import { appColor } from "@/theme/foundations/colors";
import { useProductListQuery } from "@/GraphQl/Generated/graphql";

export interface FitOptionsProps {
  label?: any;
  back?: any;
  front?: any;
}

export default function FitSelection({
  productId,
  onChange,
  selectedFit,
}: {
  productId: string;
  onChange: any;
  selectedFit: string;
}) {
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
      <FittingSwiper
        selectedFit={selectedFit}
        onChange={onChange}
        options={options}
      />
    </Box>
  );
}
