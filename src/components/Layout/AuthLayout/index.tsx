import { Box, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "../PrimaryLayout/components/Header";
import AuthProvider from "@/providers/AuthProvider";

interface IProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: IProps) => {
  return (
    <VStack w="full" justify="center" align="center">
      <Box w="100%" maxW="50rem">
        <Box h="full">
          <AuthProvider>{children}</AuthProvider>
        </Box>
      </Box>
    </VStack>
  );
};
