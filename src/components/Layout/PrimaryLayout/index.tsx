import { Box, Center, VStack } from "@chakra-ui/react";
import React, { ReactNode, Suspense } from "react";
import Navbar from "./components/Navbar";
import LoaderSkeleton from "@/components/LoaderSkeleton";

interface IProps {
  children: ReactNode;
}

const PrimaryLayout = ({ children }: IProps) => {
  return (
    <VStack w="full" h="full" justify="center" align="center">
      <Box className="my class" w="100%" height="auto" maxW="50rem">
        <Box h="100dvh">{children}</Box>
      </Box>
      <Suspense fallback={<LoaderSkeleton h="4rem" />}>
        <Navbar />
      </Suspense>
    </VStack>
  );
};

export default PrimaryLayout;
