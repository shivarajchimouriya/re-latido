import { AuthLayout } from "@/components/Layout/AuthLayout";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
};

export default Layout;
