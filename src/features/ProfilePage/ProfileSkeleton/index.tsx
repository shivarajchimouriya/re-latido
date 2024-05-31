import LoaderSkeleton from "@/components/LoaderSkeleton";
import { Box, Flex, VStack, HStack } from "@chakra-ui/react";
import React from "react";

const ProfileSkeleton = () => {
  return (
    <Box
      padding="4"
      width="full"
      borderRadius="lg"
      overflow="hidden"
    >
      <HStack align="center" direction="column">
        <LoaderSkeleton
          width="100px"
          height="100px"
          borderRadius="full"
          mb="4"
        />
        <VStack alignItems="left" ml={4}>
          <LoaderSkeleton rounded="0.3rem" width="150px" height="20px" mb="2" />
          <LoaderSkeleton rounded="0.3rem" width="120px" height="18px" mb="2" />
          <LoaderSkeleton rounded="0.3rem" width="200px" height="18px" mb="2" />
        </VStack>
      </HStack>
      <HStack width="full" gap="12" mt="2rem">
        <LoaderSkeleton rounded="0.3rem" width="100px" height="24px" mb="4" />
        <LoaderSkeleton rounded="0.3rem" width="200px" height="24px" mb="4" />
      </HStack>
      <Flex mt="8rem" gap="1rem" direction="column" align="start" pl="4" pr="4">
        <LoaderSkeleton rounded="0.3rem" width="200px" height="40px" mb="4" />
        <LoaderSkeleton rounded="0.3rem" width="200px" height="40px" mb="4" />
        <LoaderSkeleton rounded="0.3rem" width="200px" height="40px" mb="4" />
      </Flex>
    </Box>
  );
};

export default ProfileSkeleton;
