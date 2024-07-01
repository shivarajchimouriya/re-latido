import { AuthLayout } from "@/components/Layout/AuthLayout";
import PreventAuthScreens from "@/components/Layout/PreventAuthScreens";
import Header from "@/components/Layout/PrimaryLayout/components/Header";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
