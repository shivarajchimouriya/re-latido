import { appColor } from "@/theme/foundations/colors";
import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SizeCard from "../SizeCard";
export const availableSizes = [
  {
    name: "XXXS",
    value: 32,
  },
  {
    name: "XXS",
    value: 34,
  },
  {
    name: "XS",
    value: 36,
  },
  {
    name: "S",
    value: 38,
  },
  {
    name: "M",
    value: 40,
  },
  {
    name: "L",
    value: 42,
  },
  {
    name: "ML",
    value: 41,
  },

  {
    name: "XL",
    value: 44,
  },
  {
    name: "XXL",
    value: 46,
  },
  {
    name: "XXXL",
    value: 48,
  },
];

export default function SizeSelector() {
  return (
    <Container>
      <VStack>
        <Text
          className="recommended-size-text"
          color={appColor.base}
          fontSize={"1.6rem"}
          fontWeight={"bold"}
          textTransform="uppercase"
        >
          Recommended size for you
        </Text>
        <HStack gap={"1rem"}>
          {[38, 40, 42, 44].map((size) => {
            return <SizeCard recommendedSize={size} selected={size === 40} />;
          })}
        </HStack>
      </VStack>
    </Container>
  );
}
