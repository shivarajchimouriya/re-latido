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
import EditSizeCard from "../EditSizeCard";
import { useParams, useSearchParams, useRouter } from "next/navigation";
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
  sizeRange,
  onOpen,
  handleBuyClick,
}: {
  fitData: any;
  recommendation?: any[];
  sizeRange: any;
  onOpen: any;
  handleBuyClick: () => void;
}) {
  const params = useSearchParams();
  const router = useRouter();

  const newUrlSearchParams = new URLSearchParams(params);
  // const sizeSearchParam =
  const intersection = recommendation?.map((el) => {
    if (sizeRange.has(el.attributes.output)) {
      return {
        ...el,
        price: sizeRange.get(el.attributes.output),
      };
    }
    return null;
  });

  let price;

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
            {intersection?.map((node: any, i) => {
              if (node?.attributes?.output === fitData?.[0]?.size) {
                newUrlSearchParams.set("s", node?.attributes?.output);
                newUrlSearchParams.set("srid", node?.price._id);
                newUrlSearchParams.set("p", node?.price?.price?.[0]?.value);
                newUrlSearchParams.set(
                  "currency",
                  node?.price?.price?.[0]?.currency
                );

                router.push(`?${newUrlSearchParams}`,{scroll:false});

                price = node?.price?.price?.[0]?.value;
              }
              if (!node?.attributes?.output) {
                return null;
              }
              return (
                <SizeCard
                  recommendedSize={node?.attributes?.output}
                  selected={node?.attributes?.output === fitData?.[0]?.size}
                  // price={node?.price.value}
                />
              );
            })}
            <EditSizeCard onOpen={onOpen} />
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
          {price ? `रु. ${price}` : null}
        </Text>
      </Box>
      <Grid placeItems="center" mt="4rem" mb="2rem">
        <Button
          onClick={handleBuyClick}
          width={"90%"}
          fontSize={"1.6rem"}
          className="primary-button"
        >
          Buy
        </Button>
      </Grid>
    </Container>
  );
}
