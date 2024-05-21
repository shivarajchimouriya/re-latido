"use client"
import React, { ReactNode } from "react";
import { Amplify } from "aws-amplify";
import { logger } from "@/utils/logger";
import { configureAmplify } from "@/config/awsConfig";
configureAmplify();

interface IProps {
  children: ReactNode;
}

const AuthProvider = ({children}:IProps) => {
  return <>  {children} </>;
};

export default AuthProvider;
