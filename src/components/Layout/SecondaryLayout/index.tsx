import { Box, Center, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "../PrimaryLayout/components/Header";

interface IProps {
  children: ReactNode;
}

const SecondaryLayout = ({ children }: IProps) => {
  return (
    <VStack w="full" justify="center" align="center">
      <Box w="100%" maxW="50rem">
        <Header />
        {children}
      </Box>
    </VStack>
  );
};

export default SecondaryLayout;
