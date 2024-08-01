import SecondaryHeader from "@/components/Layout/PrimaryLayout/components/SecondaryHeader";
import ProtectedLayout from "@/components/Layout/ProtectedLayout";
import SecondaryLayout from "@/components/Layout/SecondaryLayout";
import AuthProvider from "@/providers/AuthProvider";
import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <ProtectedLayout>
      <SecondaryLayout>
        <SecondaryHeader />
        <Box mt="4.6rem">{children}</Box>
      </SecondaryLayout>
    </ProtectedLayout>
  );
};

export default Layout;
