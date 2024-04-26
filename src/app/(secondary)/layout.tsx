import SecondaryLayout from "@/components/Layout/SecondaryLayout";
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
