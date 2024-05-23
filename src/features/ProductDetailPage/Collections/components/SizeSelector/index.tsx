import { appColor } from "@/theme/foundations/colors";
import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SizeCard from "../SizeCard";
import { logger } from "@/utils/logger";
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

export default function SizeSelector({
  fitData,
  recommendation,
  sizeRange
}: {
  fitData: any;
    recommendation?: any[];
    sizeRange: any;
  
  }) {
  
  logger.log("size range",sizeRange)
  logger.log("recommendaton",recommendation)
  
  const intersection = recommendation?.filter((el) => {
     return sizeRange.has(el.attributes.output)

})



  
  logger.log("intersection",intersection)
  
  return (
    <Container my={"2rem"}>
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

        <Box>
          <HStack gap={"1rem"}>
            {intersection?.map((node: any) => {
              return (
                <SizeCard
                  recommendedSize={node?.attributes?.output}
                  selected={node?.attributes?.output === fitData?.[0]?.size}
                />
              );
            })}
          </HStack>
        </Box>
      </VStack>
      <Box m="2rem">
        <Text
          width={"full"}
          fontWeight="bold"
          fontSize={"1.6rem"}
          color="white"
        >
          रु. 3224
        </Text>
      </Box>
      <Grid placeItems="center" mt="4rem" mb="2rem">
        <Button width={"90%"} fontSize={"1.6rem"} className="primary-button">
          Buy
        </Button>
      </Grid>
    </Container>
  );
}
