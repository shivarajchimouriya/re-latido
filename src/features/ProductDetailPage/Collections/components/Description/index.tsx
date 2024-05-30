import { Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Description({ description }: { description: string }) {
  return (
    <VStack width={"100%"} p="8">
      <Text
        as="h2"
        fontWeight="bold"
        width="100%"
        textTransform="uppercase"
        fontSize="1.4rem"
      >
        Description
      </Text>
      <Text as="article" fontSize="1.4rem" width="100%" textAlign="left">
        {description}
      </Text>
    </VStack>
  );
}
