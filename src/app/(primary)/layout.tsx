import PrimaryLayout from "@/components/Layout/PrimaryLayout";
import Header from "@/components/Layout/PrimaryLayout/components/Header";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <PrimaryLayout>
      <Header />

      {children}
    </PrimaryLayout>
  );
};

export default Layout;
