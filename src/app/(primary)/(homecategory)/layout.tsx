import Collections from "@/features/Homepage/Collections";
import { VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <VStack w="100%">
      <Collections />

      {children}
    </VStack>
  );
};

export default Layout;
