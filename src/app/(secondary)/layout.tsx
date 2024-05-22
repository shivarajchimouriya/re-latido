import SecondaryLayout from "@/components/Layout/SecondaryLayout";
import AuthProvider from "@/providers/AuthProvider";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <SecondaryLayout>
      {children}
    </SecondaryLayout>
  );
};

export default Layout;
