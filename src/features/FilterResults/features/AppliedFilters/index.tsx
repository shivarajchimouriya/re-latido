import { CommaSeprator } from "@/lib/PriceFormat";
import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  filter: Record<string, any>;
}

const AppliedFilters = ({ filter }: IProps) => {
  const filterMap = Object.entries(filter);

  const price = `रु. ${CommaSeprator(
    filterMap.find((el) => el?.[0] === "priceLowerLimit")?.[1] || 0
  )} k - ${CommaSeprator(
    filterMap.find((el) => el?.[0] === "priceUpperLimit")?.[1] || 0
  )} k`;

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
          {filterMap.map((item) => {
            if (
              item?.[0] === "collections" ||
              item?.[0] === "limit" ||
              item?.[0] === "page" ||
              item?.[0] === "priceLowerLimit" ||
              item?.[0] === "priceUpperLimit"
            ) {
              return null;
            }
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
