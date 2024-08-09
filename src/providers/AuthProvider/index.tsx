"use client";
import React, { ReactNode } from "react";
import { Amplify } from "aws-amplify";
import { logger } from "@/utils/logger";
import { configureAmplify } from "@/config/awsConfig";
import useLocation from "@/hooks/client/useLocation";

interface IProps {
  children: ReactNode;
}

configureAmplify();
const AuthProvider = ({ children }: IProps) => {
  const { data, error, isLoading, refetch } = useLocation();
  console.log('auth provider')
  console.log("country: ", data, "error: ", error, "isLoading: ", isLoading);

  return <> {children} </>;
};

export default AuthProvider;
