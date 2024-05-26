import GenderSwitcher from "@/features/GenderPage/GenderSwitcher";
import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Box>
      <GenderSwitcher />
      {children}
    </Box>
  );
};

export default Layout;
