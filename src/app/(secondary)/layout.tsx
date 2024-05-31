import DefaultLoader from "@/components/DefaultLoader";
import ProtectedLayout from "@/components/Layout/ProtectedLayout";
import SecondaryLayout from "@/components/Layout/SecondaryLayout";
import AuthProvider from "@/providers/AuthProvider";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <ProtectedLayout>
      <SecondaryLayout>
        {children}
      </SecondaryLayout>
    </ProtectedLayout>
  );
};

export default Layout;
