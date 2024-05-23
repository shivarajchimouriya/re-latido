import { AuthLayout } from "@/components/Layout/AuthLayout";
import PreventAuthScreens from "@/components/Layout/PreventAuthScreens";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <PreventAuthScreens>
      {children}
    </PreventAuthScreens>
  );
};

export default Layout;
