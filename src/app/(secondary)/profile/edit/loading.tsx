import LoaderSkeleton from "@/components/LoaderSkeleton";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const EditSkeleton = () => {
  return (
    <Box padding="4" width="full" borderRadius="lg" overflow="hidden" mt="4rem">
      <Flex align="center" direction="column" mb="6">
        <LoaderSkeleton rounded="4px"
          width="100px"
          height="100px"
          borderRadius="full"
          mb="4"
        />
        <LoaderSkeleton rounded="4px" width="20px" height="20px" ml="100px" mt="-24px" mb="4" />
      </Flex>

      <Box mb="4">
        {/* Name Section */}
        <LoaderSkeleton rounded="4px" width="100px" height="20px" mb="2" />
        <LoaderSkeleton rounded="4px" width="full" height="20px" mb="4" />
      </Box>

      <Box mb="4">
        {/* Date of Birth Section */}
        <LoaderSkeleton rounded="4px" width="100px" height="20px" mb="2" />
        <Flex align="center">
          <LoaderSkeleton rounded="4px" width="150px" height="20px" />
          <LoaderSkeleton rounded="4px" width="20px" height="20px" ml="2" />
        </Flex>
      </Box>

      <Box mb="4">
        {/* Gender Section */}
        <LoaderSkeleton rounded="4px" width="100px" height="20px" mb="2" />
        <Flex align="center">
          <LoaderSkeleton rounded="4px" width="60px" height="40px" mr="2" />
          <LoaderSkeleton rounded="4px" width="60px" height="40px" />
        </Flex>
      </Box>

      <Box mb="4">
        {/* Address Section */}
        <LoaderSkeleton rounded="4px" width="100px" height="20px" mb="2" />
        <LoaderSkeleton rounded="4px" width="full" height="20px" mb="4" />
      </Box>

      <Box mb="4">
        {/* Phone Number Section */}
        <LoaderSkeleton rounded="4px" width="100px" height="20px" mb="2" />
        <Flex align="center">
          <LoaderSkeleton rounded="4px" width="150px" height="20px" />
          <LoaderSkeleton rounded="4px" width="20px" height="20px" ml="2" />
        </Flex>
      </Box>

      <Box mb="4">
        {/* Email Address Section */}
        <LoaderSkeleton rounded="4px" width="50%" height="20px" mb="2" />
        <LoaderSkeleton rounded="4px" width="full" height="20px" mb="4" />
          </Box>
          
      <Box mb="4" mt="8">
        {/* Button */}
        <LoaderSkeleton rounded="4px" width="full" height="40px" mb="4" />
      </Box>
    </Box>
  );
};

export default EditSkeleton;
