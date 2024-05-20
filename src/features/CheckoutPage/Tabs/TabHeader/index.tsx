import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const TabHeader = () => {
  const tabHeads = [
    { name: "shipping details" },
    { name: "payment \n details" },
    { name: "order summary" }
  ];

  return (
    <Flex w="full" justify="space-between" p="1rem" textTransform="uppercase">
      {tabHeads.map((el, i) => {
        return (
          <VStack key={i} p="1rem">
            <Text fontWeight="extrabold" fontSize="1.4rem">
              {i + 1}
            </Text>
            <Text
              fontSize="1.1rem"
              whiteSpace="wrap"
              textAlign="center"
              w="min-content"
            >
              {el.name}
            </Text>
          </VStack>
        );
      })}
    </Flex>
  );
};

export default TabHeader;
