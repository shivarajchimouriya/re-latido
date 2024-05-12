import { Box, Center, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

interface IProps {
  children: ReactNode;
}

const PrimaryLayout = ({ children }: IProps) => {
  return (
    <VStack w="full" justify="center" align="center">
      <Box w="100%" maxW="50rem">
        <Header />
        <Box h="80vh">
          {children}
        </Box>
        <Navbar />
      </Box>
    </VStack>
  );
};

export default PrimaryLayout;
