import { Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Description({ description }: { description: string }) {
  return (
    <VStack width={"100%"} p="8">
      <Text
        fontWeight="bold"
        width={"100%"}
        textTransform="uppercase"
        fontSize="1.4rem"

      >
        Description
      </Text>
      <Text width={"100%"} textAlign={"left"}>
        {description}
      </Text>
    </VStack>
  );
}
