import PrimaryLayout from "@/components/Layout/PrimaryLayout";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <PrimaryLayout>
      {children}
    </PrimaryLayout>
  );
};

export default Layout;
