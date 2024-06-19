import GenderSwitcher from "@/features/GenderPage/GenderSwitcher";
import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Box>
      <GenderSwitcher />
      <Flex alignItems="end" justifyContent="center">
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
