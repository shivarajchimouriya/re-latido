import React from "react";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";

interface IProps {
  subtotal: number;
  promoDiscount?: number;
  finalAmount: number;
}

export default function InvoiceCard({
  subtotal,
  promoDiscount,
  finalAmount,
}: IProps) {
  return (
    <Box bg="white" borderRadius="2xl" boxShadow="md">
      <VStack px={8} pt={6} gap={6} spacing="4">
        <HStack justifyContent="space-between" w="100%">
          <Text color="black" fontSize={"1.2rem"}>
            SUBTOTAL
          </Text>
          <Text fontWeight="bold" fontSize={"1.2rem"}>
            NRS. {subtotal || 0}
          </Text>
        </HStack>
        <HStack justifyContent="space-between" w="100%">
          <Text color="black" fontSize={"1.2rem"}>
            PROMO DISCOUNT (IF ANY)
          </Text>
          <Text fontWeight="bold" fontSize={"1.2rem"}>
            NRS. {promoDiscount ? promoDiscount : 0}
          </Text>
        </HStack>
        <Divider />
      </VStack>
      <HStack
        px={8}
        py={6}
        roundedBottom={"2xl"}
        justifyContent="space-between"
        bg="black"
        color="white"
        w="100%"
      >
        <Text fontWeight="bold" fontSize={"1.2rem"}>
          FINAL AMOUNT
        </Text>
        <Text fontWeight="bold" fontSize={"1.2rem"}>
          NRS. {finalAmount || 0}
        </Text>
      </HStack>
    </Box>
  );
}
