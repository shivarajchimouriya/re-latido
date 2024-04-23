"use client";
import React, { ReactNode } from "react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "@/theme";

interface IProps {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: IProps) => {
  return (
    <ChakraBaseProvider theme={theme}>
      {children}
    </ChakraBaseProvider>
  );
};

export default AppThemeProvider;
