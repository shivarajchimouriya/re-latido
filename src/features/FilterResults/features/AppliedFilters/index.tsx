import { CommaSeprator } from "@/lib/PriceFormat";
import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  filter: Record<string, any>;
}

const AppliedFilters = ({ filter }: IProps) => {
  const filterMap = Object.entries(filter);

  const price = `रु. ${CommaSeprator(
    filter.priceLowerLimit || 0
  )} k - ${CommaSeprator(filter.priceUpperLimit || 0)} k`;

  const paramsToExclude = new Set([
    "collections",
    "limit",
    "page",
    "priceLowerLimit",
    "priceUpperLimit",
  ]);

  const paramsToShow = filterMap.filter((el) => !paramsToExclude.has(el[0]));

  return (
    <Container>
      <Flex
        w="full"
        justify="center"
        position="fixed"
        zIndex="10"
        mt="0"
        left={0}
        py="3.4rem"
        bg="base"
        gap="1rem"
        px="1rem"
      >
        <Text fontSize="1.6rem" mt="0.1rem">
          Filters:
        </Text>
        <Flex
          w="full"
          alignItems="center"
          gap="1rem"
          overflowX="scroll"
          p="0.1rem"
        >
          {paramsToShow.map((item) => {
            return (
              <Text
                bg="base"
                shadow="sm"
                px="1rem"
                py="0.4rem"
                display="grid"
                placeItems="center"
                rounded="2xl"
                outline="1px solid rgba(0,0,0,0.1)"
                textTransform="capitalize"
              >
                {item?.[1] ? item?.[1] : ""}
              </Text>
            );
          })}
          <Text
            bg="base"
            shadow="sm"
            px="1rem"
            py="0.4rem"
            rounded="xl"
            display="grid"
            placeItems="center"
            outline="1px solid rgba(0,0,0,0.1)"
            textTransform="capitalize"
          >
            {price}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AppliedFilters;
