import { appColor } from "@/theme/foundations/colors";
import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SizeCard from "../SizeCard";
import { logger } from "@/utils/logger";
import EditSizeCard from "../EditSizeCard";
import { useSearchParams, useRouter } from "next/navigation";
import Toast from "@/components/Toast";
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
  handleSizeCardClick,
  activeFit,
  isPending,
}: {
  fitData: any;
  recommendation?: any[];
  sizeRange: any;
  onOpen: any;
  handleBuyClick: (price: number, sizeRangeId: string) => void;
  handleSizeCardClick: (val: number) => void;
  activeFit: string;
  isPending: boolean;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const toast = useToast();
  const [price, setPrice] = useState<number>();
  const [sizeRangeId, setSizeRangeId] = useState<string>();

  useEffect(() => {
    const elementThatMatches = intersection?.find((el) => {
      return el?.attributes?.output === fitData?.[0]?.size;
    });

    setPrice(elementThatMatches?.price?.price?.[0]?.value);
    setSizeRangeId(elementThatMatches?.price._id);
  }, [fitData]);

  useEffect(() => {
    if (activeFit) {
      const newUrlSearchParams = new URLSearchParams(params);
      newUrlSearchParams.set("fit", activeFit);
      router.replace(`?${newUrlSearchParams}`, { scroll: false });
    }
  }, [activeFit]);

  const intersection = recommendation?.map((el) => {
    if (sizeRange.has(el.attributes.output)) {
      return {
        ...el,
        price: sizeRange.get(el.attributes.output),
      };
    }
    return null;
  });
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

        <Box maxW="500px">
          <HStack gap="1rem" mx="2rem">
            {intersection?.map((node: any, i) => {
              if (!node?.attributes?.output) {
                return null;
              }
              const recommendedSize = node?.attributes?.output;
              const selected = node?.attributes?.output === fitData?.[0]?.size;
              return (
                <SizeCard
                  key={i}
                  recommendedSize={recommendedSize}
                  selected={selected}
                  onClick={() =>
                    !selected && handleSizeCardClick(recommendedSize)
                  }
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
          {price ? `रु. ${Intl.NumberFormat().format(price)}` : null}
        </Text>
      </Box>
      <Grid placeItems="center" mt="4rem" mb="2rem">
        <Button
          isLoading={isPending}
          disabled={isPending}
          isDisabled={isPending}
          opacity={isPending ? 0.6 : 1}
          onClick={() => {
            if (price && sizeRangeId) {
              handleBuyClick(price, sizeRangeId);
            } else {
              toast({
                position: "top",
                render: ({ onClose }) => {
                  return <Toast onClose={onClose} status="error" message="Something went wrong." />;
                },
              });
            }
          }}
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
