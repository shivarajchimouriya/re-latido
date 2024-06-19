import LoaderSkeleton from "@/components/LoaderSkeleton";
import { VStack, HStack, Box } from "@chakra-ui/react";
const LoginSkeleton = () => {
  return (
    <VStack spacing={4} p={4} mt="2rem" w="100%" alignItems="start">
      <LoaderSkeleton rounded="0.3rem" height="4rem" width="30%" />
      <Box width="100%" mt="2rem">
        <HStack spacing={1} my="1rem">
          <LoaderSkeleton rounded="0.3rem" height="1rem" width="20%" />
          <LoaderSkeleton rounded="0.3rem" height="1rem" width="30%" />
        </HStack>
        <LoaderSkeleton rounded="0.3rem" height="1rem" width="80%" />
      </Box>
      <LoaderSkeleton rounded="0.3rem" height="2rem" width="100%" />
      <LoaderSkeleton
        rounded="0.3rem"
        height="1rem"
        alignSelf="end"
        width="40%"
      />
      <LoaderSkeleton mt="2rem" rounded="0.3rem" height="3rem" width="100%" />
    </VStack>
  );
};

export default LoginSkeleton;
