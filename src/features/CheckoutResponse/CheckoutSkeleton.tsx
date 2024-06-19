import LoaderSkeleton from "@/components/LoaderSkeleton";
import { Center, HStack, VStack } from "@chakra-ui/react";
import React from "react";

export default function CheckoutSkeleton() {
  return (
    <VStack spacing={4} p={4} w="100%">
      {/* Skeleton for the navigation bar */}
      <HStack justify="space-between" width="100%" padding="1rem">
        <LoaderSkeleton rounded="0.3rem" height="6rem" width="6rem" /> {/* Menu Icon */}
        <LoaderSkeleton rounded="0.3rem" height="6rem" width="6rem" /> {/* Logo */}
        <LoaderSkeleton rounded="0.3rem" height="6rem" width="6rem" /> {/* Chat Icon */}
      </HStack>

      {/* Skeleton for the confirmation icon */}
      <Center width="100%" padding="2rem">
        <LoaderSkeleton rounded="0.3rem" height="10rem" width="10rem" borderRadius="full" />
      </Center>

      {/* Skeleton for the "Payment Confirmed" text */}
      <LoaderSkeleton rounded="0.3rem" height="4rem" width="100%" />

      {/* Skeleton for the "Order Summary" text */}
      <LoaderSkeleton rounded="0.3rem" mt="4rem" alignSelf="start" height="3rem" width="40%" />

      {/* Skeleton for the order details card */}
      <VStack
        spacing={2}
        p={4}
        width="100%"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
      >
        <LoaderSkeleton rounded="0.3rem" height="1.5rem" width="100%" />
        <LoaderSkeleton rounded="0.3rem" height="2rem" width="100%" />

        <HStack width="100%">
          <LoaderSkeleton rounded="0.3rem" height="12rem" width="15rem" />{" "}
          {/* Image */}
          <VStack align="start" spacing={1} width="100%">
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="70%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="50%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="70%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="90%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="50%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="70%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="60%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="90%" />
            <LoaderSkeleton rounded="0.3rem" height="1rem" width="50%" />
          </VStack>
        </HStack>

        <LoaderSkeleton rounded="0.3rem" height="1rem" mt="1rem" width="40%" />
      </VStack>
    </VStack>
  );
}
