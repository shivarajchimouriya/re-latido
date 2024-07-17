import PrimaryLayout from "@/components/Layout/PrimaryLayout";
import Header from "@/components/Layout/PrimaryLayout/components/Header";
import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <PrimaryLayout>
      <Header />
      <Box mt="10rem">
        {children}
      </Box>
    </PrimaryLayout>
  );
};

export default Layout;
