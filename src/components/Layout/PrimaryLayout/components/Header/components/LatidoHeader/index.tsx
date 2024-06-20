import React from "react";
import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import CleanLogo from "@/components/Icons/CleanLogo";

export default function LatidoHeader() {
  return (
    <HStack gap="1.6rem" color="white">
      <Grid
        placeItems="center"
        bg="black"
        rounded="full"
        bgColor="white"
        h="5rem"
        w="5rem"
      >
        <CleanLogo fill="black" />
      </Grid>
      <Text
        textTransform="uppercase"
        as="h2"
        fontSize="3.2rem"
        fontWeight="bold"
      >
        Latido
      </Text>
    </HStack>
  );
}
