"use client";

import React, { ReactNode } from "react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import useLocation from "@/hooks/client/useLocation";

interface IProps {
  children: ReactNode;
}

function AppThemeProvider({ children }: IProps) {
  const { country, error, isLoading } = useLocation();
  console.log("country: ", country, "error: ", error, "isLoading: ", isLoading);
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}

export default AppThemeProvider;
