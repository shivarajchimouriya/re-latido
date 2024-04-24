import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import data from "@/data/mock/fitting";
import FittingSwiper from "../FittingSwiper";
import { appColor } from "@/theme/foundations/colors";
export default function FitSelection() {
  const options =
    data?.map((fit) => {
      return {
        label: fit?.attributes?.Fit,
        front: fit?.attributes?.FrontImage,
        back: fit?.attributes?.BackImage,
      };
    }) || [];
  return (
    <Box width="100%">
      <Text textTransform="uppercase" fontWeight="medium" fontSize={"1.4rem"} color={appColor.base}>
        Fit Selection
      </Text>
      <FittingSwiper options={options} />
    </Box>
  );
}
