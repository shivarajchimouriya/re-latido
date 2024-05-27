import LoaderSkeleton from "@/components/LoaderSkeleton";
import { appColor } from "@/theme/foundations/colors";
import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function SizeRecommendationLoader() {
  return (
    <Box mt={12}>
      <HStack width={"full"} gap={"1rem"} justifyContent={"center"}>
      <Text
          className="recommended-size-text"
          color={appColor.base}
          fontSize={"1.6rem"}
          fontWeight={"bold"}
          textTransform="uppercase"
        >
          Recommended size for you
        </Text>
      </HStack>
      <HStack width={"full"} gap={"1rem"} justifyContent={"center"}>
        <LoaderSkeleton rounded={"1rem"} width={20} height={20} />
        <LoaderSkeleton rounded={"1rem"} width={20} height={20} />
        <LoaderSkeleton rounded={"1rem"} width={20} height={20} />
        <LoaderSkeleton ml={"1rem"} rounded={"1rem"} width={20} height={20} />
      </HStack>

      <HStack my={4} mt={8} width={"full"} gap={"1rem"} justifyContent={"left"}>
        <LoaderSkeleton mx={8} rounded={"1rem"} width={40} height={14} />
      </HStack>
      <HStack
        my={4}
        mt={10}
        width={"full"}
        gap={"1rem"}
        justifyContent={"center"}
      >
        <LoaderSkeleton
          mx={8}
          rounded={"1rem"}
          width={"full"}
          height={"4.5rem"}
        />
      </HStack>
    </Box>
  );
}
